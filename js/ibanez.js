document.addEventListener("DOMContentLoaded", function () {
    const buyButton = document.getElementById("buy");

    if (buyButton) {
        buyButton.addEventListener("click", function () {
            const product = {
                name: "IBANEZ",
                model: "GRX70QA-TKS",
                price: "25800 ₽"
            };

            let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            cartItems.push(product);
            localStorage.setItem("cart", JSON.stringify(cartItems));
            window.location.href = "cart.html";
        });
    }
});