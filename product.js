document.addEventListener("DOMContentLoaded", function() {
 let product = JSON.parse(localStorage.getItem("selectedProduct"));
 if (!product) {
  alert("No product selected!");
  window.location.href = "index.html";
 }
 
 document.getElementById("product-title").innerText = product.name;
 document.getElementById("product-image").src = product.image;
 document.getElementById("product-description").innerText = product.description;
 document.getElementById("product-price").innerText = product.price;
 
 loadReviews(product.id);
});

function addToCart() {
 let cart = JSON.parse(localStorage.getItem("cart")) || [];
 let product = JSON.parse(localStorage.getItem("selectedProduct"));
 cart.push(product);
 localStorage.setItem("cart", JSON.stringify(cart));
 alert("Product added to cart!");
}

function loadReviews(productId) {
 let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
 let productReviews = reviews.filter(r => r.productId === productId);
 let reviewContainer = document.getElementById("reviews");
 reviewContainer.innerHTML = "";
 
 productReviews.forEach(review => {
  let div = document.createElement("div");
  div.innerHTML = `<p>${review.text} - <strong>${review.user}</strong></p>`;
  reviewContainer.appendChild(div);
 });
}

function submitReview() {
 let text = document.getElementById("review-text").value;
 let user = JSON.parse(localStorage.getItem("loggedInUser"));
 let product = JSON.parse(localStorage.getItem("selectedProduct"));
 
 if (!user) {
  alert("Please log in to leave a review.");
  return;
 }
 
 let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
 reviews.push({ productId: product.id, text, user: user.name });
 localStorage.setItem("reviews", JSON.stringify(reviews));
 alert("Review submitted!");
 loadReviews(product.id);
}