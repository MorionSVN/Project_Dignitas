document.addEventListener("DOMContentLoaded", function () {
    const buyButton = document.getElementById("buy");

    if (buyButton) {
        buyButton.addEventListener("click", function () {
            const product = {
                name: "ARIA",
                model: "PRO II J-2 BK",
                price: "23000 ₽"
            };

            let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
            cartItems.push(product);
            localStorage.setItem("cart", JSON.stringify(cartItems));
            window.location.href = "cart.html";
        });
    }
});