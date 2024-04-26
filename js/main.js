let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const slideInterval = 10000;

function changeSlide() {
    slides[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.opacity = 1;
}

setInterval(changeSlide, slideInterval);

document.addEventListener("DOMContentLoaded", function() {
    function getCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        return cart.length;
    }

    function addToCart(name, model, price) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ name: name, model: model, price: price });
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function updateCartCount() {
        let cartCountElement = document.querySelector(".cart_num");
        if (cartCountElement) {
            cartCountElement.textContent = getCartCount();
        }
    }

    let addToCartButtons = document.querySelectorAll("#incart");
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            let parentSection = event.target.closest("section");
            let name = parentSection.querySelector("#name").textContent;
            let model = parentSection.querySelector("#model").textContent;
            let price = parentSection.querySelector("#price").textContent;
            price = parseInt(price.replace(/[₽\s]/g, ""));
            addToCart(name, model, price);
            updateCartCount();
        });
    });
    updateCartCount();
});
  