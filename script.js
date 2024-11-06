// Set the current date on page load
document.getElementById("date").textContent = `Date of Purchase: ${new Date().toLocaleDateString()}`;

let totalAmount = 0; // Initialize total amount

// Function to add a new item to the receipt
function addItem() {
    // Get the values from the input fields
    const itemName = document.getElementById("product-name").value;
    const itemPrice = parseFloat(document.getElementById("product-price").value);

    // Validate the input values
    if (!itemName || isNaN(itemPrice) || itemPrice <= 0) {
        alert("Please enter a valid product name and price.");
        return;
    }

    // Create a new item entry div
    const itemEntry = document.createElement("div");
    itemEntry.className = "receipt-item";

    // Create and set the product name element
    const itemNameElem = document.createElement("span");
    itemNameElem.textContent = itemName;

    // Create and set the product price element
    const itemPriceElem = document.createElement("span");
    itemPriceElem.textContent = `$${itemPrice.toFixed(2)}`;

    // Append product name and price to the item entry div
    itemEntry.appendChild(itemNameElem);
    itemEntry.appendChild(itemPriceElem);

    // Add the new item entry to the receipt details section
    document.getElementById("receipt-details").appendChild(itemEntry);

    // Update the total amount and display it
    totalAmount += itemPrice;
    document.getElementById("total-price").textContent = `$${totalAmount.toFixed(2)}`;
    document.getElementById("grand-total").textContent = `$${totalAmount.toFixed(2)}`;

    // Clear the input fields after adding the item
    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
}
