let cart = [];

function addToCart(name, price) {
    cart.push({name, price});
    displayCart();
}

function displayCart() {
    let c = document.getElementById("cart");
    c.innerHTML = "";
    cart.forEach(item => {
        c.innerHTML += `<p>${item.name} — ₦${item.price}</p>`;
    });
}