document.addEventListener("DOMContentLoaded", function () {
    const buyButton = document.getElementById("buy");

    if (buyButton) {
        buyButton.addEventListener("click", function () {
            const product = {
                name: "SCHECTER",
                model: "SGR S-1 WSN",
                price: "27500 ₽"
            };

            let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            cartItems.push(product);
            localStorage.setItem("cart", JSON.stringify(cartItems));
            window.location.href = "cart.html";
        });
    }
});