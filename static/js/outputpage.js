// JavaScript to toggle visibility and handle the quantity control functionality
const addButton = document.getElementById("addToCart");
const quantityDisplay = document.querySelector(".quantity");
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const quantityControl = document.querySelector(".quantity-control");

let quantity = 0;

plusButton.addEventListener("click", () => {
    quantity++;
    updateQuantity();
});

minusButton.addEventListener("click", () => {
    if (quantity > 0) {
        quantity--;
        updateQuantity();
    }
});




addButton.addEventListener("click", () => {
    addButton.style.display = "none"; // Hide the "Add to cart" button
    quantityControl.style.display = "flex"; // Show the quantity control
    quantity = 1; // Start with a minimum quantity of 1 when the "Add to cart" button is clicked.
    updateQuantity();
});

function updateQuantity() {
    quantityDisplay.textContent = quantity;

    if (quantity === 0) {
        addButton.style.display = "block"; // Show the "Add to cart" button
        quantityControl.style.display = "none"; // Hide the quantity control
    }
}


function createAndAppendPredictionElement(prediction) {
    let container = document.createElement("div");
    container.className = "p-4 rounded-4 bg-light";

    let diseaseHeader = document.createElement("h5");
    diseaseHeader.className = "text-center mb-4";
    diseaseHeader.textContent = "Disease Name: " + prediction.disease_prediction;

    let symptomsHeader = document.createElement("h6");
    symptomsHeader.className = "mb-3";
    symptomsHeader.innerHTML = "<strong>Symptoms</strong>";

    let symptomsParagraph = document.createElement("p");
    symptomsParagraph.textContent = prediction.symptoms_prediction;

    let descriptionHeader = document.createElement("h6");
    descriptionHeader.className = "mb-3";
    descriptionHeader.innerHTML = "<strong>Disease Description</strong>";

    let descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = prediction.description_prediction;

    let remedyHeader = document.createElement("h6");
    remedyHeader.className = "mb-3";
    remedyHeader.innerHTML = "<strong>Remedy</strong>";

    let remedyLink = document.createElement("a");
    remedyLink.href = "https://www.ayurtimes.com/?s=&q=" + prediction.Ayurvedic_Remedy;
    remedyLink.target = "_blank";
    remedyLink.textContent = prediction.remedy_prediction;

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

    mainContainer.appendChild(container);
}


let mainContainer = document.getElementById("main-container");

for (let i = 0; i < predictionsData.length; i++) {
    let prediction = predictionsData[i];
    createAndAppendPredictionElement(prediction);
    console.log(predictionsData[i]);
}









let getFormulation=document.getElementById("getFormulation");
getFormulation.onclick=function(){

}