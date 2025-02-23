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