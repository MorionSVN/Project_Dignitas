document.addEventListener("DOMContentLoaded", function () {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalElement = document.getElementById("sum");

    function Total() {
        let total = 0;
        cartItems.forEach(function (item) {
            total += parseFloat(item.price);
        });
        totalElement.textContent = "ИТОГО: " + total + " ₽";
    }

    function Cart() {
        cartContainer.innerHTML = "";
        if (cartItems.length === 0) {
            totalElement.textContent = "ИТОГО: 0 ₽";
        }
        else {
            cartItems.forEach(function (item, index) {
                let cartItem = document.createElement("section");
                cartItem.classList.add("cart-item");

                let itemName = document.createElement("p");
                itemName.textContent = item.name;

                let itemModel = document.createElement("p");
                itemModel.textContent = item.model;

                let itemPrice = document.createElement("p");
                itemPrice.textContent = "Цена: " + item.price;

                let deleteButton = document.createElement("button");
                deleteButton.textContent = "X";
                deleteButton.classList.add("delete-btn");
                deleteButton.addEventListener("click", function () {
                    cartItems.splice(index, 1);
                    localStorage.setItem("cart", JSON.stringify(cartItems));
                    Cart();
                    Total();
                });
                cartItem.appendChild(itemName);
                cartItem.appendChild(itemModel);
                cartItem.appendChild(itemPrice);
                cartItem.appendChild(deleteButton);
                cartContainer.appendChild(cartItem);
            });
            Total();
        }
    }
    Cart();

    let checkoutBtn = document.getElementById("checkout");
    checkoutBtn.addEventListener("click", function () {
        if (cartItems.length === 0) {
            alert("Ваша корзина пуста. Добавьте товары перед оформлением заказа.");
            return;
        }
        showModal("Спасибо за покупку :D");
        cartItems = [];
        localStorage.removeItem("cart");
        Cart();
        Total();
    });
    function showModal(message) {
        let modal = document.getElementById("modal");
        let modalText = document.getElementById("modal-text");
        modalText.textContent = message;
        modal.style.display = "block";

        let closeBtn = document.getElementsByClassName("close")[0];
        closeBtn.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
});