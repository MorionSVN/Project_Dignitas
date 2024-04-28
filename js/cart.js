document.addEventListener("DOMContentLoaded", function () {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalElement = document.getElementById("total");
    let discountElement = document.getElementById("discount");
    let totalWithDiscountElement = document.getElementById("total-with-discount");

    function updateTotal() {
        let total = 0;
        cartItems.forEach(function (item) {
            total += item.price;
        });
        totalElement.textContent = total.toFixed(2);

        let discount = total * 0.1;
        discountElement.textContent = discount.toFixed(2);
        let totalWithDiscount = total - discount;
        totalWithDiscountElement.textContent = totalWithDiscount.toFixed(2);
    }

    function Cart() {
        cartContainer.innerHTML = "";
        cartItems.forEach(function (item, index) {
            let cartItem = document.createElement("section");
            cartItem.classList.add("cart-item");

            let itemName = document.createElement("p");
            itemName.textContent = "Название: " + item.name;

            let itemModel = document.createElement("p");
            itemModel.textContent = "Модель: " + item.model;

            let itemPrice = document.createElement("p");
            itemPrice.textContent = "Цена: " + item.price;

            let deleteButton = document.createElement("button");
            deleteButton.textContent = "X";
            deleteButton.classList.add("delete-btn");
            deleteButton.addEventListener("click", function () {
                cartItems.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cartItems));
                Cart();
                updateTotal();
            });
            cartItem.appendChild(itemName);
            cartItem.appendChild(itemModel);
            cartItem.appendChild(itemPrice);
            cartItem.appendChild(deleteButton);
            cartContainer.appendChild(cartItem);
        });
        updateTotal();
    }

    Cart();
    let checkoutBtn = document.querySelector("checkout");
    checkoutBtn.addEventListener("click", function () {
        alert("Спасибо за покупку :D");
    });
});