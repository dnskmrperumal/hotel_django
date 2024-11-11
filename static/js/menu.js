document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("cartModal");
    const modalItemName = document.getElementById("modal-item-name");
    const modalItemPrice = document.getElementById("modal-item-price");
    const itemQuantity = document.getElementById("itemQuantity");
    const closeModal = document.querySelector(".close");

    // Open modal and populate item details
    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("click", function() {
            const itemName = this.querySelector("h2").textContent;
            const itemPrice = parseFloat(this.querySelector(".price").textContent.replace('Rs.', ''));
            modalItemName.textContent = itemName;
            modalItemPrice.textContent = itemPrice;
            itemQuantity.value = 1;
            modal.style.display = "flex";
        });
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    document.getElementById("increaseQuantity").onclick = function() {
        itemQuantity.value = parseInt(itemQuantity.value) + 1;
    };

    document.getElementById("decreaseQuantity").onclick = function() {
        if (itemQuantity.value > 1) {
            itemQuantity.value = parseInt(itemQuantity.value) - 1;
        }
    };

    document.querySelector(".btn-add-to-cart").onclick = function() {
        const itemName = modalItemName.textContent;
        const itemPrice = parseFloat(modalItemPrice.textContent);
        const quantity = parseInt(itemQuantity.value);

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ name: itemName, price: itemPrice, quantity: quantity });
        localStorage.setItem("cart", JSON.stringify(cart));

        modal.style.display = "none";
        alert(`${itemName} added to cart with quantity ${quantity}`);
    };
});
