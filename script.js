// Initialize an array to store the items and total amount
let items = [];
let totalAmount = 0;

// Function to add an item to the receipt
function addItem() {
    // Get the product name and price from the input fields
    const productName = document.getElementById("product-name").value;
    const productPrice = parseFloat(document.getElementById("product-price").value);

    // Check if the inputs are valid
    if (!productName || isNaN(productPrice) || productPrice <= 0) {
        alert("Please enter a valid product name and price.");
        return;
    }

    // Add the item to the items array
    items.push({ name: productName, price: productPrice });

    // Update the total amount
    totalAmount += productPrice;

    // Update the receipt details in the DOM
    updateReceiptDetails();

    // Clear the input fields
    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
}

// Function to update the receipt details and total amount
function updateReceiptDetails() {
    // Get the receipt details container
    const receiptDetails = document.getElementById("receipt-details");

    // Clear the current receipt details
    receiptDetails.innerHTML = "";

    // Display each item in the items array
    items.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.className = "receipt-item";
        itemElement.innerHTML = `<span>${item.name}</span><span>$${item.price.toFixed(2)}</span>`;
        receiptDetails.appendChild(itemElement);
    });

    // Update the total amount displayed on the receipt
    document.getElementById("total-price").textContent = `$${totalAmount.toFixed(2)}`;
    document.getElementById("grand-total").textContent = `$${totalAmount.toFixed(2)}`;
}
