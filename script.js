let cart = [];
let cartTotal = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotalEl = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  cartTotal = 0;

  cart.forEach(({ item, price }) => {
    const li = document.createElement("li");
    li.textContent = `${item} - R$ ${price},00`;
    cartItems.appendChild(li);
    cartTotal += price;
  });

  cartCount.textContent = cart.length;
  cartTotalEl.textContent = cartTotal;
}

document.getElementById("cart-btn").addEventListener("click", () => {
  const cartEl = document.getElementById("cart");
  cartEl.style.display = cartEl.style.display === "block" ? "none" : "block";
});

const cards = document.querySelectorAll(".card");
cards[0].classList.add("hovered");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    cards.forEach((c) => c.classList.remove("hovered"));
    card.classList.add("hovered");
  });

  card.addEventListener("mouseleave", () => {
    cards.forEach((c) => c.classList.remove("hovered"));
  });
});
