// Initialize current date on load
document.getElementById("date").textContent = `Date of Purchase: ${new Date().toLocaleDateString()}`;

let totalAmount = 0;

// Function to add a new item to the receipt
function addItem() {
    // Sample item details
    const itemName = "Apple Product";
    const itemPrice = 99.99;

    // Create a new item entry
    const itemEntry = document.createElement("div");
    itemEntry.className = "receipt-item";

    const itemNameElem = document.createElement("span");
    itemNameElem.textContent = itemName;
    
    const itemPriceElem = document.createElement("span");
    itemPriceElem.textContent = `$${itemPrice.toFixed(2)}`;

    itemEntry.appendChild(itemNameElem);
    itemEntry.appendChild(itemPriceElem);

    // Add the item entry to the receipt details
    document.getElementById("receipt-details").appendChild(itemEntry);

    // Update the total amount
    totalAmount += itemPrice;
    document.getElementById("total-price").textContent = `$${totalAmount.toFixed(2)}`;
    document.getElementById("grand-total").textContent = `$${totalAmount.toFixed(2)}`;
}
