document.addEventListener("DOMContentLoaded", function() {
    const cartItemsContainer = document.getElementById("cartItemsContainer");
    const totalPriceElement = document.getElementById("totalPrice");
    const submitButton = document.getElementById("submitOrder");

    // Retrieve cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to update the cart in localStorage
    function updateLocalStorage() {
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    // Function to render the cart table
    function renderCart() {
        const cartTableBody = document.querySelector("#orderTable tbody");
        cartTableBody.innerHTML = ""; // Clear the existing table rows

        let totalPrice = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;

            const itemRow = document.createElement("tr");

            itemRow.innerHTML = `
                <td>${item.name}</td>
                <td>
                    <button class="quantity-btn" data-action="decrease" data-item="${item.name}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-item="${item.name}">+</button>
                </td>
                <td>Rs. ${item.price.toFixed(2)}</td>
                <td>Rs. ${itemTotal.toFixed(2)}</td>
                <td>
                    <button class="remove-btn" data-item="${item.name}">Remove</button>
                </td>
            `;

            cartTableBody.appendChild(itemRow);
        });

        // Update total price
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    // Function to handle item quantity change
    function changeItemQuantity(itemName, action) {
        const item = cart.find(i => i.name === itemName);
        if (item) {
            if (action === "increase") {
                item.quantity += 1;
            } else if (action === "decrease" && item.quantity > 1) {
                item.quantity -= 1;
            }
            updateLocalStorage();
        }
    }

    // Function to remove item from cart
    function removeItemFromCart(itemName) {
        cart = cart.filter(i => i.name !== itemName);
        updateLocalStorage();
    }

    // Add event listeners for quantity buttons and remove buttons
    cartItemsContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("quantity-btn")) {
            const action = event.target.getAttribute("data-action");
            const itemName = event.target.getAttribute("data-item");
            changeItemQuantity(itemName, action);
        } else if (event.target.classList.contains("remove-btn")) {
            const itemName = event.target.getAttribute("data-item");
            removeItemFromCart(itemName);
        }
    });

    // Handle order submission
    submitButton.addEventListener("click", function() {
        alert("Order submitted successfully!");
        localStorage.removeItem("cart");  // Clear cart after submission
        cart = [];  // Reset cart in JS
        renderCart();  // Re-render the empty cart
    });

    // Function to add item to the cart (avoid duplicates)
    function addToCart(item) {
        // Check if the item is already in the cart
        const existingItem = cart.find(i => i.name === item.name);
        if (existingItem) {
            existingItem.quantity += item.quantity;  // Update quantity if item exists
        } else {
            cart.push(item);  // Add new item if not already in cart
        }
        updateLocalStorage();
    }

    // Call renderCart to initialize the cart table when the page loads
    renderCart();

});
