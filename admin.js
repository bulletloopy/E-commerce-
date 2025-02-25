document.addEventListener("DOMContentLoaded", function() {
 loadProducts();
 loadOrders();
});

function loadProducts() {
 let products = JSON.parse(localStorage.getItem("products")) || [];
 let productList = document.getElementById("admin-products");
 
 productList.innerHTML = "";
 products.forEach((product, index) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${product.name} - $${product.price} 
            <button onclick="deleteProduct(${index})">Delete</button>`;
  productList.appendChild(listItem);
 });
}

function addProduct() {
 let name = prompt("Enter product name:");
 let price = prompt("Enter product price:");
 
 if (name && price) {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.push({ id: products.length + 1, name, price });
  localStorage.setItem("products", JSON.stringify(products));
  loadProducts();
 }
}

function deleteProduct(index) {
 let products = JSON.parse(localStorage.getItem("products")) || [];
 products.splice(index, 1);
 localStorage.setItem("products", JSON.stringify(products));
 loadProducts();
}

function loadOrders() {
 let orders = JSON.parse(localStorage.getItem("orders")) || [];
 let orderList = document.getElementById("admin-orders");
 
 orderList.innerHTML = "";
 orders.forEach(order => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `Order #${order.id} - ${order.status} 
            <button onclick="updateOrderStatus(${order.id})">Mark as Shipped</button>`;
  orderList.appendChild(listItem);
 });
}

function updateOrderStatus(orderId) {
 let orders = JSON.parse(localStorage.getItem("orders")) || [];
 let order = orders.find(o => o.id === orderId);
 if (order) {
  order.status = "Shipped";
  localStorage.setItem("orders", JSON.stringify(orders));
  loadOrders();
 }
}