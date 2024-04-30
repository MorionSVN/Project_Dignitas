function addToCart(item) {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(item);
    localStorage.setItem("cart", JSON.stringify(cartItems));
}

let addToCartBtns = document.querySelectorAll("#incart");
addToCartBtns.forEach(function (button) {
    button.addEventListener("click", function () {
        let item = {
            name: button.parentElement.querySelector("#name").textContent,
            price: button.parentElement.querySelector("#price").textContent,
            model: button.parentElement.querySelector("#model").textContent
        };
        addToCart(item);
    });
});

let buyBtns = document.querySelectorAll("#buy");
buyBtns.forEach(function (button) {
    button.addEventListener("click", function () {
        let item = {
            name: button.parentElement.querySelector("#name").textContent,
            price: button.parentElement.querySelector("#price").textContent,
            model: button.parentElement.querySelector("#model").textContent
        };
        addToCart(item);
        window.location.href = "cart.html";
    });
});