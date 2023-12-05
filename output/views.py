# accounts/views.py
from django.shortcuts import render, redirect
import os
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
from nltk.corpus import stopwords
import nltk
import json

# Construct the absolute file path using the STATIC_ROOT setting
csv_file_path = os.path.join('static', 'csv_files', 'AyurBharat_DataSet.csv')

# Read the CSV file
data = pd.read_csv(csv_file_path)

# Preprocess text data
nltk.download('stopwords')
stop_words = set(stopwords.words('english'))

def preprocess_text(text):
    text = text.lower()
    text = ' '.join([word for word in text.split() if word not in stop_words])
    text = ''.join([char for char in text if char.isalnum() or char.isspace()])
    return text

# Define target variables for each column by their names
y_disease = data["Disease_Ayurvedic_Name"]
y_description = data["Description"]
y_symptoms = data["Symptoms"]
y_remedy = data["Ayurvedic_Remedy"]
y_ingredients = data["Ingredients"]
y_preparation = data["Preparation"]

# Split data into features (X) and target (y) for each column
X = data["Symptoms"]

# Vectorize text data using TF-IDF
vectorizer = TfidfVectorizer()
X_vectorized = vectorizer.fit_transform(X)

# Train a RandomForestClassifier for each column
clf_disease = RandomForestClassifier(n_estimators=100, random_state=42)
clf_disease.fit(X_vectorized, y_disease)

clf_description = RandomForestClassifier(n_estimators=100, random_state=42)
clf_description.fit(X_vectorized, y_description)

clf_symptoms = RandomForestClassifier(n_estimators=100, random_state=42)
clf_symptoms.fit(X_vectorized, y_symptoms)

clf_remedy = RandomForestClassifier(n_estimators=100, random_state=42)
clf_remedy.fit(X_vectorized, y_remedy)

clf_ingredients = RandomForestClassifier(n_estimators=100, random_state=42)
clf_ingredients.fit(X_vectorized, y_ingredients)

clf_preparation = RandomForestClassifier(n_estimators=100, random_state=42)
clf_preparation.fit(X_vectorized, y_preparation)

def predict_disease_info( symptoms ):
    # Vectorize user input (symptoms only)
    symptoms = preprocess_text(symptoms)
    user_input_vectorized = vectorizer.transform([symptoms])

    # Predict Disease_Ayurvedic_Name
    disease_prediction = clf_disease.predict(user_input_vectorized)[0]

    # Predict Description
    description_prediction = clf_description.predict(user_input_vectorized)[0]

    # Predict Symptoms
    symptoms_prediction = clf_symptoms.predict(user_input_vectorized)[0]

    # Predict Ayurvedic_Remedy
    remedy_prediction = clf_remedy.predict(user_input_vectorized)[0]

    # Predict Ingredients
    ingredients_prediction = clf_ingredients.predict(user_input_vectorized)[0]

    # Predict Preparation
    preparation_prediction = clf_preparation.predict(user_input_vectorized)[0]

    return {
            'disease_prediction': disease_prediction,
            'description_prediction': description_prediction,
            'symptoms_prediction': symptoms_prediction,
            'remedy_prediction': remedy_prediction,
            'ingredients_prediction': ingredients_prediction,
            'preparation_prediction': preparation_prediction
        }


def inputpage(request):
    return render(request, 'inputpage.html')

def outputpage(request):
    if request.method == 'POST' :
        symptoms = request.POST.get('symptoms')  # Get user input
            
        predictions = []        
        predit = json.dumps(predict_disease_info(symptoms))
        predictions.append(predit)

        print(symptoms, predictions)

        return render(request, 'outputpage.html', { 'predictions': predictions } )
    
    return redirect('inputpage')


def dmodel(request):
    return render(request, '3Dmodel.html')

def remedypage(request):
    return render(request, 'remedypage.html')
