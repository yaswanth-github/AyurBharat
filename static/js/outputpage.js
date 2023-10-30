let mainContainer = document.getElementById("main-container");
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
    remedyLink.href = "https://www.ayurtimes.com/?s=&q=" + prediction.remedy_prediction;
    remedyLink.target = "_blank";
    remedyLink.textContent = prediction.remedy_prediction;

    // Ingredients Section
    let ingredientsHeader = document.createElement("h6");
    ingredientsHeader.id = ingredientsHeaderId;
    ingredientsHeader.className = "mb-3";
    ingredientsHeader.innerHTML = "<strong>Ingredients</strong>";

    let ingredientsParagraph = document.createElement("p");
    ingredientsParagraph.id = ingredientsParagraphId;
    ingredientsParagraph.textContent = prediction.ingredients_prediction;
    ingredientsHeader.style.display = "none"; // Initially hide the ingredients section
    ingredientsParagraph.style.display = "none";

    // Detailed Steps Section
    let stepsHeader = document.createElement("h6");
    stepsHeader.id = stepsHeaderId;
    stepsHeader.className = "mb-3";
    stepsHeader.innerHTML = "<strong>Detailed Steps</strong>";

    let stepsParagraph = document.createElement("p");
    stepsParagraph.id = stepsParagraphId;
    stepsParagraph.textContent = prediction.preparation_prediction;
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
            getFormulationButton.textContent = "Hide Formulation!";

        } else {
            ingredientsHeader.style.display = "none";
            ingredientsParagraph.style.display = "none";
            stepsHeader.style.display = "none";
            stepsParagraph.style.display = "none";
            hr1.style.display = "none";
            hr2.style.display = "none";
            hr3.style.display = "none";
            getFormulationButton.textContent = "Get Formulation Now!";
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

function createProductCard(product) {
    let productId = "productId_" + product.productName.replace(/\s+/g, ''); // Generate productId based on product name

    // Create the main container div
    let productContainer = document.createElement("div");
    productContainer.id = "productContainer_" + productId;
    productContainer.classList = "mb-4 col-12 col-sm-7 col-md-3";

    // Create the shadow card div
    let cardDiv = document.createElement("div");
    cardDiv.id = "cardDiv_" + productId;
    cardDiv.className = "shadow card";

    // Create the image element
    let productImage = document.createElement("img");
    productImage.id = "productImage_" + productId;
    productImage.src = product.imageUrl || "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-trending-blogs-1-img.png"; // Use a default image URL if no imageUrl is provided
    productImage.className = "hover-effect card-image";

    // Create the div for card content
    let cardContentDiv = document.createElement("div");
    cardContentDiv.id = "cardContentDiv_" + productId;
    cardContentDiv.className = "p-2";

    // Create the main heading
    let mainHeading = document.createElement("h1");
    mainHeading.id = "mainHeading_" + productId;
    mainHeading.className = "main-heading card-heading";
    mainHeading.textContent = product.productName;

    // Create the product description link
    let descriptionLink = document.createElement("p");
    descriptionLink.id = "descriptionLink_" + productId;
    descriptionLink.className = "card-paragraph card-special-paragraph";
    descriptionLink.textContent = product.productDesc; // Add the full product description here
    descriptionLink.style.maxHeight = "4em"; // Set a maximum height for the product description (3 lines)
    descriptionLink.style.overflow = "hidden"; // Hide any overflowing text
    descriptionLink.style.textOverflow = "ellipsis"; // Show ellipsis (...) when text overflows

    // Create the MRP paragraph
    let mrpParagraph = document.createElement("p");
    mrpParagraph.id = "mrpParagraph_" + productId;
    mrpParagraph.className = "card-paragraph mrp-paragraph mt-4";
    mrpParagraph.innerHTML = '<span>MRP: <i class="fa-solid fa-indian-rupee-sign"></i> ' + product.productPrice + '</span>';

    // Create the quantity control and buttons div
    let quantityButtonsDiv = document.createElement("div");
    quantityButtonsDiv.id = "quantityButtonsDiv_" + productId;
    quantityButtonsDiv.className = "d-flex flex-row mb-3";

    // Create the quantity control div
    let quantityControlDiv = document.createElement("div");
    quantityControlDiv.id = "quantityControlDiv_" + productId;
    quantityControlDiv.className = "quantity-control custom-outline-button1";

    // Create the minus button
    let minusButton = document.createElement("button");
    minusButton.id = "minusButton_" + productId;
    minusButton.className = "quantity-button minus";
    minusButton.textContent = "-";

    // Create the quantity span
    let quantitySpan = document.createElement("span");
    quantitySpan.id = "quantitySpan_" + productId;
    quantitySpan.className = "quantity";
    quantitySpan.textContent = "0";

    // Create the plus button for quantity control
    let plusButton = document.createElement("button");
    plusButton.id = "plusButton_" + productId;
    plusButton.className = "quantity-button plus align-right";
    plusButton.textContent = "+";

    // Create the "Add to cart" button
    let addToCartButton = document.createElement("button");
    addToCartButton.id = "addToCartButton_" + productId;
    addToCartButton.className = "custom-outline-button1 hover-effect";
    addToCartButton.textContent = "Add to cart";

    // Create the "Buy Now" button
    let buyNowButton = document.createElement("button");
    buyNowButton.id = "buyNowButton_" + productId;
    buyNowButton.className = "custom-outline-button1 align-right hover-effect";
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

    let quantityDisplay = document.getElementById(`quantitySpan_${productId}`);
    let plusButton1 = document.getElementById(`plusButton_${productId}`);
    let minusButton1 = document.getElementById(`minusButton_${productId}`);
    let addToCartButton1 = document.getElementById(`addToCartButton_${productId}`);
    let quantity = 0;

    function updateQuantity() {
        quantityDisplay.textContent = quantity;

        if (quantity === 0) {
            addToCartButton1.style.display = "block";
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

let products = [
    {
        productName: "Pushyanuga Churna",
        imageUrl: "https://maharishiayurvedaindia.com/cdn/shop/files/pushyanuga-churna-for-women-s-health-25-gms-maharishi-ayurveda-india-1_700x.jpg?v=1692185445",
        productDesc: "Pushyanuga Churna is an Ayurvedic medicine that helps in the management of women-related disorders like menstrual cramps and white discharge. Pushyanuga Churna is useful in the treatment of bleeding disorders. It is an Ayurvedic medicine that helps in the management of women-related disorders like menstrual cramps and white discharge. Pushyanuga Churna is also useful in the treatment of bleeding disorder",
        productPrice: "252"
    },
    {
        productName: "Amritadi Guggulu",
        imageUrl: "https://maharishiayurvedaindia.com/cdn/shop/files/amritadi-guggulu-100-tablets-maharishi-ayurveda-india-1_700x.jpg?v=1692185427",
        productDesc: "Amritadi Guggulu is an ayurvedic medicine used to treat swelling of joints and limbs, gout, skin diseases and constipation.",
        productPrice: "220"
    },
    {
        productName: "Chitrak Haritki",
        imageUrl: "https://maharishiayurvedaindia.com/cdn/shop/files/chitrak-haritki-200gms-pack-maharishi-ayurveda-india-1_700x.jpg?v=1692185562",
        productDesc: "Useful in Chronic and recurrent Rhinitis, Coryza, cough, Worm Infestation, Abdominal Lump, Upward movement of gases, Piles, Dyspnoea, Loss of appetite etc.",
        productPrice: "290"
    },
    {
        productName: "Lohasava",
        imageUrl: "https://maharishiayurvedaindia.com/cdn/shop/files/lohasava-ayurvedic-iron-tonic-450ml-maharishi-ayurveda-india-1_700x.jpg?v=1692185352",
        productDesc: "Lohasava by Maharishi Ayurveda is an ayurvedic medicine used as an iron tonic as well as anti-obesity medicine. It is also helpful in the management of diseases such as jaundice, hepatitis, spleen enlargement, fatty liver, malabsorption syndrome, cough, asthma etc.",
        productPrice: "250"
    },{
        productName:"Bilwadi Churna" ,
        imageUrl:"https://maharishiayurvedaindia.com/cdn/shop/files/bilwadi-churna-50gms-maharishi-ayurveda-india-1_700x.jpg?v=1692185436",
        productDesc: "Bilwadi Churna is an ayurvedic medicine which has astringent action. Bilwadi Churna is used for irritable bowel syndrome, colitis, diarrhoea and dysentery. It helps to improve digestion and absorbs the excess liquid content from the intestines. It is the best medicine for IBS.",
        productPrice:"80"
    },
    {
        productName:"Brahmi Ghee" ,
        imageUrl:"https://maharishiayurvedaindia.com/cdn/shop/files/brahmi-ghee-maharishi-ayurveda-india-1_700x.png?v=1692185403",
        productDesc: "Brahmi Ghee is an excellent memory booster. Made exactly as prescribed in Ayurveda Text, Maharishi Ayurveda Bhrami Ghrit is prepared using clarified butter and the best quality Bhrami to provide the health benefits.",
        productPrice:"1,400"
    },
    {
        productName:"Punarnavadi Kashayam" ,
        imageUrl:"https://maharishiayurvedaindia.com/cdn/shop/files/punarnavadi-kashayam-for-liver-health-200ml-maharishi-ayurveda-india-1_700x.jpg?v=1692185317",
        productDesc: "Punarnavadi Kashayam  is an ayurvedic medicine used in liver disorders and hepatitis. It has anti-inflammatory action. It is also useful in cases of edema due to liver disorders or heart diseases, fever, cough, and asthma",
        productPrice:" 145"
    ,},
    {
        productName:"Phal Ghrit" ,
        imageUrl:"https://maharishiayurvedaindia.com/cdn/shop/files/phal-ghrit-promotes-fertility-100gms-maharishi-ayurveda-india-1_700x.jpg?v=1692185514",
        productDesc: "Phal Ghrita is an ayurvedic medicine, in herbal ghee form. It is also used for panchakarma procedures. ",
        productPrice:"430"
    },
    {
        productName:"Giloy (Tinospora cordifolia)" ,
        imageUrl:"https://maharishiayurvedaindia.com/cdn/shop/files/giloy-satva-guduchi-amrita-satva-10gms-pack-of-5-maharishi-ayurveda-india-1_700x.jpg?v=1692185673",
        productDesc: "A potent ayurvedic formulation that is obtained from the maceration of the aqueous extract of the divine Giloy plant.",
        productPrice:"630"
    },
    {
        productName:"" ,
        imageUrl:"",
        productDesc: "",
        productPrice:""
    }

];


document.addEventListener("DOMContentLoaded", function() {
    let mainContainer = document.getElementById("main-container");

    // Your other code here

    for (let i = 0; i < predictionsData.length; i++) {
        let prediction = predictionsData[i];
        createAndAppendPredictionElement(JSON.parse(prediction));
console.log(JSON.parse(prediction).remedy_prediction);
        for(let j=0;j<products.length;j++){
            if(products[j].productName===JSON.parse(prediction).remedy_prediction){
                createProductCard(products[j]);
                break;
            }
        }
        

    }
});