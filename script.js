document.getElementById("date").innerText = new Date().toLocaleDateString();

let totalPrice = 0;

function addItem() {
    // Prompt user for item details
    const itemName = prompt("Enter item name:");
    const itemPrice = parseFloat(prompt("Enter item price:"));

    if (!itemName || isNaN(itemPrice)) return alert("Invalid input. Try again.");

    // Update total price
    totalPrice += itemPrice;
    document.getElementById("total-price").innerText = `$${totalPrice.toFixed(2)}`;

    // Create and append the item entry
    const entry = document.createElement("div");
    entry.className = "receipt-item";
    entry.innerHTML = `<span>${itemName}</span><span>$${itemPrice.toFixed(2)}</span>`;
    document.getElementById("receipt-entries").appendChild(entry);
}
