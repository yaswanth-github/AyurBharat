let mainContainer = document.getElementById("main-container");
let predictions = [{
        disease_prediction: "Disease 1",
        symptoms_prediction: "Symptoms 1",
        description_prediction: "Description 1",
        Ayurvedic_Remedy: "remedy-link-1",
        remedy_prediction: "Remedy 1",
        ingredients:"sdsaljvn,alsibf,alskvn, kasnsv"
    },
    {
        disease_prediction: "Disease 2",
        symptoms_prediction: "Symptoms 2",
        description_prediction: "Description 2",
        Ayurvedic_Remedy: "remedy-link-2",
        remedy_prediction: "Remedy 2",
        ingredients:"sdsaljvn,alsibf,alskvn, kasnsv"
    },
    // Add more predictions as needed
];


let addToCartCount = 0;

function createAndAppendPredictionElement(prediction, trailer) {
    let containerId = "predictionContainer_" + trailer;
    let diseaseHeaderId = "diseaseHeader_" + trailer;
    let symptomsHeaderId = "symptomsHeader_" + trailer;
    let symptomsParagraphId = "symptomsParagraph_" + trailer;
    let descriptionHeaderId = "descriptionHeader_" + trailer;
    let descriptionParagraphId = "descriptionParagraph_" + trailer;
    let remedyHeaderId = "remedyHeader_" + trailer;
    let ingredientsHeaderId = "ingredientsHeader_" + trailer;
    let ingredientsParagraphId = "ingredientsParagraph_" + trailer;
    let stepsHeaderId = "stepsHeader_" + trailer;
    let stepsParagraphId = "stepsParagraph_" + trailer;
    let getFormulationButtonId = "getFormulationButton_" + trailer;
    let doctorConsultationButtonId = "doctorConsultationButton_" + trailer;
    
    let hr1 = document.createElement("hr");
    let hr2 = document.createElement("hr");
    let hr3 = document.createElement("hr");

    
    hr1.style.display = "none";
    hr2.style.display = "none";
    hr3.style.display = "none";
    
    let container = document.createElement("div");
    container.id = containerId;
    container.className = "col-12 col-md-8 p-4 rounded-4 bg-light mb-2";

    let diseaseHeader = document.createElement("h5");
    diseaseHeader.id = diseaseHeaderId;
    diseaseHeader.className = "text-center mb-4";
    diseaseHeader.textContent = "Disease Name: " + prediction.disease_prediction;

    let symptomsHeader = document.createElement("h6");
    symptomsHeader.id = symptomsHeaderId;
    symptomsHeader.className = "mb-3";
    symptomsHeader.innerHTML = "<strong>Symptoms</strong>";

    let symptomsParagraph = document.createElement("p");
    symptomsParagraph.id = symptomsParagraphId;
    symptomsParagraph.textContent = prediction.symptoms_prediction;

    let descriptionHeader = document.createElement("h6");
    descriptionHeader.id = descriptionHeaderId;
    descriptionHeader.className = "mb-3";
    descriptionHeader.innerHTML = "<strong>Disease Description</strong>";

    let descriptionParagraph = document.createElement("p");
    descriptionParagraph.id = descriptionParagraphId;
    descriptionParagraph.textContent = prediction.description_prediction;

    let remedyHeader = document.createElement("h6");
    remedyHeader.id = remedyHeaderId;
    remedyHeader.className = "mb-3";
    remedyHeader.innerHTML = "<strong>Remedy</strong>";

    let remedyLink = document.createElement("a");
    remedyLink.href = "https://www.ayurtimes.com/?s=&q=" + prediction.Ayurvedic_Remedy;
    remedyLink.target = "_blank";
    remedyLink.textContent = prediction.remedy_prediction;

    // Ingredients Section
    let ingredientsHeader = document.createElement("h6");
    ingredientsHeader.id = ingredientsHeaderId;
    ingredientsHeader.className = "mb-3";
    ingredientsHeader.innerHTML = "<strong>Ingredients</strong>";

    let ingredientsParagraph = document.createElement("p");
    ingredientsParagraph.id = ingredientsParagraphId;
    ingredientsParagraph.textContent = prediction.ingredients;
    ingredientsHeader.style.display = "none"; // Initially hide the ingredients section
    ingredientsParagraph.style.display = "none";

    // Detailed Steps Section
    let stepsHeader = document.createElement("h6");
    stepsHeader.id = stepsHeaderId;
    stepsHeader.className = "mb-3";
    stepsHeader.innerHTML = "<strong>Detailed Steps</strong>";

    let stepsParagraph = document.createElement("p");
    stepsParagraph.id = stepsParagraphId;
    stepsParagraph.textContent = prediction.detailed_steps;
    stepsHeader.style.display = "none"; // Initially hide the steps section
    stepsParagraph.style.display = "none";

    let buttonContainer = document.createElement("div");
    buttonContainer.className = "d-flex flex-row mt-4";
    // "Get Formulation" button
    let getFormulationButton = document.createElement("button");
    getFormulationButton.id = getFormulationButtonId;
    getFormulationButton.className = "white-border";
    getFormulationButton.textContent = "Get Formulation Now!";
    getFormulationButton.addEventListener("click", function() {
        // Toggle the display of ingredients and steps sections
        if (ingredientsHeader.style.display === "none") {
            ingredientsHeader.style.display = "block";
            ingredientsParagraph.style.display = "block";
            stepsHeader.style.display = "block";
            stepsParagraph.style.display = "block";
            hr1.style.display = "block";
            hr2.style.display = "block";
            hr3.style.display = "block";
        } else {
            ingredientsHeader.style.display = "none";
            ingredientsParagraph.style.display = "none";
            stepsHeader.style.display = "none";
            stepsParagraph.style.display = "none";
            hr1.style.display = "none";
            hr2.style.display = "none";
            hr3.style.display = "none";
        }
    });

    // ... Rest of the code for "Consult a doctor!" button and its event listener ...
 let doctorConsultationButton = document.createElement("button");
    doctorConsultationButton.id = doctorConsultationButtonId;
    doctorConsultationButton.className = "white-border align-right";
    doctorConsultationButton.textContent = "Consult a doctor!";
    doctorConsultationButton.addEventListener("click", function() {
        // Action to perform when "Consult a doctor!" is clicked
        console.log("Consult a doctor button clicked for container: " + trailer);
        // You can replace this with your desired action
    });

    // Append elements to construct the HTML structure
    
        buttonContainer.appendChild(getFormulationButton);
    buttonContainer.appendChild(doctorConsultationButton);
    
    container.appendChild(diseaseHeader);
    container.appendChild(document.createElement("hr"));
    container.appendChild(symptomsHeader);
    container.appendChild(symptomsParagraph);
    container.appendChild(document.createElement("hr"));
    container.appendChild(descriptionHeader);
    container.appendChild(descriptionParagraph);
    container.appendChild(document.createElement("hr"));
    container.appendChild(remedyHeader);
    container.appendChild(remedyLink);
    container.appendChild(hr1);
    container.appendChild(ingredientsHeader);
    container.appendChild(ingredientsParagraph);
    container.appendChild(hr2);
    container.appendChild(stepsHeader);
    container.appendChild(stepsParagraph);
    container.appendChild(hr3);
    container.appendChild(buttonContainer);

    // Append the container to the document's body
    mainContainer.appendChild(container);
}

function createProductCard(prediction) {

    addToCartCount += 1;
    let trailer = "addToCartCount_" + addToCartCount;

    // Create the main container div
    let productContainer = document.createElement("div");
    productContainer.id = "productContainer_" + trailer;
    productContainer.classList = "mb-4 col-12 col-sm-7 col-md-4";

    // Create the shadow card div
    let cardDiv = document.createElement("div");
    cardDiv.id = "cardDiv_" + trailer;
    cardDiv.className = "shadow card";

    // Create the image element
    let productImage = document.createElement("img");
    productImage.id = "productImage_" + trailer;
    productImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-trending-blogs-1-img.png";
    productImage.className = "hover-effect card-image";

    // Create the div for card content
    let cardContentDiv = document.createElement("div");
    cardContentDiv.id = "cardContentDiv_" + trailer;
    cardContentDiv.className = "p-2";

    // Create the main heading
    let mainHeading = document.createElement("h1");
    mainHeading.id = "mainHeading_" + trailer;
    mainHeading.className = "main-heading card-heading";
    mainHeading.textContent = "XYZ Chuarakja";

    // Create the product description link
    let descriptionLink = document.createElement("a");
    descriptionLink.id = "descriptionLink_" + trailer;
    descriptionLink.className = "card-paragraph card-special-paragraph";
    descriptionLink.textContent = "product description abc defgh ijklm nopqrs tuvwxyz";

    // Create the MRP paragraph
    let mrpParagraph = document.createElement("p");
    mrpParagraph.id = "mrpParagraph_" + trailer;
    mrpParagraph.className = "card-paragraph mt-4";
    mrpParagraph.innerHTML = '<span>MRP: <i class="fa-solid fa-indian-rupee-sign"></i> </span>600';

    // Create the quantity control and buttons div
    let quantityButtonsDiv = document.createElement("div");
    quantityButtonsDiv.id = "quantityButtonsDiv" + trailer;
    quantityButtonsDiv.className = "d-flex flex-row mb-3";

    // Create the quantity control div
    let quantityControlDiv = document.createElement("div");
    quantityControlDiv.id = "quantityControlDiv_" + trailer;
    quantityControlDiv.className = "quantity-control custom-outline-button1";

    // Create the minus button
    let minusButton = document.createElement("button");
    minusButton.id = "minusButton_" + trailer;
    minusButton.className = "quantity-button minus";
    minusButton.textContent = "-";

    // Create the quantity span
    let quantitySpan = document.createElement("span");
    quantitySpan.id = "quantitySpan_" + trailer;
    quantitySpan.className = "quantity";
    quantitySpan.textContent = "0";

    // Create the plus button for quantity control
    let plusButton = document.createElement("button");
    plusButton.id = "plusButton_" + trailer;
    plusButton.className = "quantity-button plus align-right";
    plusButton.textContent = "+";

    // Create the "Add to cart" button
    let addToCartButton = document.createElement("button");
    addToCartButton.id = "addToCartButton_" + trailer;
    addToCartButton.className = "custom-outline-button1";
    addToCartButton.textContent = "Add to cart";

    // Create the "Buy Now" button
    let buyNowButton = document.createElement("button");
    buyNowButton.id = "buyNowButton_" + trailer;
    buyNowButton.className = "custom-outline-button1 align-right";
    buyNowButton.textContent = "Buy Now";

    // Append elements to construct the HTML structure
    quantityControlDiv.appendChild(minusButton);
    quantityControlDiv.appendChild(quantitySpan);
    quantityControlDiv.appendChild(plusButton);

    quantityButtonsDiv.appendChild(quantityControlDiv);
    quantityButtonsDiv.appendChild(addToCartButton);
    quantityButtonsDiv.appendChild(buyNowButton);

    cardContentDiv.appendChild(mainHeading);
    cardContentDiv.appendChild(descriptionLink);
    cardContentDiv.appendChild(mrpParagraph);
    cardContentDiv.appendChild(quantityButtonsDiv);

    cardDiv.appendChild(productImage);
    cardDiv.appendChild(cardContentDiv);

    productContainer.appendChild(cardDiv);

    // Append the main container to the document body
    mainContainer.appendChild(productContainer);
    let quantityDisplay = document.getElementById(`quantitySpan_${trailer}`);
    let plusButton1 = document.getElementById(`plusButton_${trailer}`);
    let minusButton1 = document.getElementById(`minusButton_${trailer}`);
    let addToCartButton1 = document.getElementById(`addToCartButton_${trailer}`);
    let quantity = 0;

    function updateQuantity() {
        quantityDisplay.textContent = quantity;

        if (quantity === 0) {
            addToCartButton.style.display = "block";
            quantityControlDiv.style.display = "none";
        }
    }

    plusButton1.addEventListener("click", () => {
        quantity++;
        updateQuantity();
    });

    minusButton1.addEventListener("click", () => {
        if (quantity > 0) {
            quantity--;
            updateQuantity();
        }
    });

    addToCartButton1.addEventListener("click", () => {
        addToCartButton1.style.display = "none";
        quantityControlDiv.style.display = "flex";
        quantity = 1;
        updateQuantity();
    });
}


document.addEventListener("DOMContentLoaded", function() {
    let mainContainer = document.getElementById("main-container");

    // Your other code here

    for (let i = 0; i < predictionsData.length; i++) {
        let prediction = predictionsData[i];
        createAndAppendPredictionElement(JSON.parse(prediction));
        console.log(JSON.parse(prediction));
        createProductCard(prediction);
        console.log(predictionsData);
    }
});