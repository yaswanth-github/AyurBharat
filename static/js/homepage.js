function createProductCard(product) {
    const productId = "productId_" + product.productName.replace(/\s+/g, ''); 

    const productContainer = document.createElement("div");
    productContainer.id = "productContainer_" + productId;
    productContainer.classList = "mb-4 col-12 col-sm-7 col-md-3";

    const cardDiv = document.createElement("div");
    cardDiv.id = "cardDiv_" + productId;
    cardDiv.className = "shadow card";

    const productImage = document.createElement("img");
    productImage.id = "productImage_" + productId;
    productImage.src = product.imageUrl || "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-trending-blogs-1-img.png";
    productImage.className = "hover-effect card-image";

    const cardContentDiv = document.createElement("div");
    cardContentDiv.id = "cardContentDiv_" + productId;
    cardContentDiv.className = "p-2";

    const mainHeading = document.createElement("h1");
    mainHeading.id = "mainHeading_" + productId;
    mainHeading.className = "main-heading card-heading";
    mainHeading.textContent = product.productName;

    const descriptionLink = document.createElement("p");
    descriptionLink.id = "descriptionLink_" + productId;
    descriptionLink.className = "card-paragraph card-special-paragraph";
    descriptionLink.textContent = product.productDesc;
    descriptionLink.style.maxHeight = "4em";
    descriptionLink.style.overflow = "hidden";
    descriptionLink.style.textOverflow = "ellipsis";

    const mrpParagraph = document.createElement("p");
    mrpParagraph.id = "mrpParagraph_" + productId;
    mrpParagraph.className = "card-paragraph mrp-paragraph mt-4";
    mrpParagraph.innerHTML = `<span>MRP: <i class="fa-solid fa-indian-rupee-sign"></i> ${product.productPrice}</span>`;

    const quantityButtonsDiv = document.createElement("div");
    quantityButtonsDiv.id = "quantityButtonsDiv_" + productId;
    quantityButtonsDiv.className = "d-flex flex-row mb-3";

    const quantityControlDiv = document.createElement("div");
    quantityControlDiv.id = "quantityControlDiv_" + productId;
    quantityControlDiv.className = "quantity-control custom-outline-button1";

    const minusButton = document.createElement("button");
    minusButton.id = "minusButton_" + productId;
    minusButton.className = "quantity-button minus";
    minusButton.textContent = "-";

    const quantitySpan = document.createElement("span");
    quantitySpan.id = "quantitySpan_" + productId;
    quantitySpan.className = "quantity";
    quantitySpan.textContent = "0";

    const plusButton = document.createElement("button");
    plusButton.id = "plusButton_" + productId;
    plusButton.className = "quantity-button plus align-right";
    plusButton.textContent = "+";

    const addToCartButton = document.createElement("button");
    addToCartButton.id = "addToCartButton_" + productId;
    addToCartButton.className = "custom-outline-button1 hover-effect";
    addToCartButton.textContent = "Add to cart";

    const buyNowButton = document.createElement("button");
    buyNowButton.id = "buyNowButton_" + productId;
    buyNowButton.className = "custom-outline-button1 align-right hover-effect";
    buyNowButton.textContent = "Buy Now";

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

    return productContainer;

    const quantityDisplay = document.getElementById(`quantitySpan_${productId}`);
    const plusButton1 = document.getElementById(`plusButton_${productId}`);
    const minusButton1 = document.getElementById(`minusButton_${productId}`);
    const addToCartButton1 = document.getElementById(`addToCartButton_${productId}`);
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



const carouselInner = document.getElementById("carouselIndicators"); // Get the carousel inner container

// Sample product data
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
    }
    ,
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




products.forEach((product) => {
    const productCard = createProductCard(product); // Create product card
    const carouselItem = document.createElement("div"); // Create a carousel item
    carouselItem.className = "carousel-item"; // Set carousel item class

    carouselItem.appendChild(productCard); // Append product card to the carousel item
    carouselInner.appendChild(carouselItem); // Append carousel item to the carousel inner container
});



