let cart = [];
let cartTotal = 0;

function addToCart(item, price) {
  const existingItem = cart.find((product) => product.item === item);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ item, price, quantity: 1 });
  }

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
    const bt = document.createElement("button");
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
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotalEl = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  cartTotal = 0;
  let totalItems = 0;

  cart.forEach(({ item, price, quantity }, index) => {
    const li = document.createElement("li");
    li.textContent = ` - ${quantity}x ${item} - R$ ${(price * quantity).toFixed(
      2
    )} `;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";
    removeBtn.style.marginLeft = "10px";
    removeBtn.style.backgroundColor = "#e74c3c";
    removeBtn.style.color = "white";
    removeBtn.style.border = "none";
    removeBtn.style.padding = "4px 8px";
    removeBtn.style.borderRadius = "4px";
    removeBtn.style.cursor = "pointer";

    removeBtn.addEventListener("click", () => {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1); // Remove item se quantidade for 1
      }
      updateCart();
    });

    li.appendChild(removeBtn);
    cartItems.appendChild(li);
    cartTotal += price * quantity;
    totalItems += quantity;
  });

  cartCount.textContent = totalItems;
  cartTotalEl.textContent = cartTotal.toFixed(2);
}
