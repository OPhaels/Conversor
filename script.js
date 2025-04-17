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
    li.textContent = `${item} - R$ ${price.toFixed(2)}`;
    cartItems.appendChild(li);
    cartTotal += price;
  });

  cartCount.textContent = cart.length;
  cartTotalEl.textContent = cartTotal.toFixed(2);
}

document.getElementById("cart-btn").addEventListener("click", () => {
  const cartEl = document.getElementById("cart");
  cartEl.style.display = cartEl.style.display === "block" ? "none" : "block";
});

const cards = document.querySelectorAll(".card");
if (cards.length > 0) {
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
}

function showCategory(category) {
  const allCategories = document.querySelectorAll(".categoria-items");
  allCategories.forEach((cat) => {
    cat.style.display = "none";
  });

  const selected = document.querySelector(`.${category}`);
  if (selected) {
    selected.style.display = "block";
  }
}

const banner = document.getElementById("banner");
const imagens = [
  "/lojinha/images/thum.jpg",
  "/lojinha/images/promo1.jpg",
  "/lojinha/images/promo2.jpg",
  "/lojinha/images/promo3.jpg",
];

let index = 0;
setInterval(() => {
  index = (index + 1) % imagens.length;
  banner.src = imagens[index];
}, 4000);
