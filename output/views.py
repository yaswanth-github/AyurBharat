# accounts/views.py
from django.shortcuts import render, redirect
import joblib
from nltk.corpus import stopwords


def model_output():
    # Load the combined models from the joblib file
    combined_models = joblib.load("{ static 'models/ml_model.joblib' } ")

    # Access each model from the combined file
    clf_disease = combined_models['disease_classifier']
    clf_description = combined_models['description_classifier']
    clf_symptoms = combined_models['symptoms_classifier']
    clf_remedy = combined_models['remedy_classifier']
    clf_ingredients = combined_models['ingredients_classifier']
    clf_preparation = combined_models['preparation_classifier']
    vectorizer=combined_models['vectorizer']

    # Define a function to preprocess text
    stop_words = set(stopwords.words('english'))

    def preprocess_text(text):
        text = text.lower()
        text = ' '.join([word for word in text.split() if word not in stop_words])
        text = ''.join([char for char in text if char.isalnum() or char.isspace()])
        return text

    user_symptoms = preprocess_text(user_symptoms)

    # Vectorize user input (symptoms)
    user_input_vectorized = vectorizer.transform([user_symptoms])

    # Make predictions using the loaded models
    predicted_disease = clf_disease.predict(user_input_vectorized)[0]
    description_prediction = clf_description.predict(user_input_vectorized)[0]
    symptoms_prediction = clf_symptoms.predict(user_input_vectorized)[0]
    remedy_prediction = clf_remedy.predict(user_input_vectorized)[0]
    ingredients_prediction = clf_ingredients.predict(user_input_vectorized)[0]
    preparation_prediction = clf_preparation.predict(user_input_vectorized)[0]


    # Print the predictions
    print(" ")
    print("Predicted Disease:", predicted_disease)
    print(" ")
    print("Description for Disease:", description_prediction)
    print(" ")
    print("Predicted Symptoms:", symptoms_prediction)
    print(" ")
    print("Predicted Remedy:", remedy_prediction)
    print(" ")
    print("Predicted Ingredients:", ingredients_prediction)
    print(" ")
    print("Predicted Preparation:", preparation_prediction)


def inputpage(request):
    return render(request, 'inputpage.html')

def outputpage(request):
    if request.method == 'POST' :
        symptoms = 'This is the trail symptoms'
        disease = 'This is trail disease name'
        Description = 'This is an trail Description'
        Remedy = 'This is a remedy'

        if  (request.POST.get('disease')):
        #     disease = request.POST['disease']

        if (request.POST.get('symptoms')):
            symptoms = request.POST['symptoms']
            
        # predictions = []        
        # predit = {'disease_name': disease , 'Symptoms': symptoms , 'Description' : Description , 'Remedy': Remedy}
        # predictions.append(predit)

        return render(request, 'outputpage.html', {'disease_name': disease , 'Symptoms': symptoms , 'Description' : Description , 'Remedy': Remedy} )
    
    return redirect( 'inputpage')


def dmodel(request):
    return render(request, '3Dmodel.html')

def remedypage(request):
    return render(request, 'remedypage.html')
