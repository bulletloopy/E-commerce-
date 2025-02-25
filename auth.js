document.getElementById("signup-form").addEventListener("submit", function(event) {
 event.preventDefault();
 
 let name = document.getElementById("name").value;
 let email = document.getElementById("email").value;
 let password = document.getElementById("password").value;
 
 let users = JSON.parse(localStorage.getItem("/e commerce store/data/user.json")) || [];
 
 // Check if email already exists
 if (users.some(user => user.email === email)) {
  alert("Email already registered!");
  return;
 }
 
 // Save new user
 users.push({ name, email, password });
 localStorage.setItem("/e commerce store/data/user.json", JSON.stringify(users));
 
 alert("Signup successful! Redirecting to login...");
 window.location.href = "/e commerce store/html/login.html";









document.getElementById("login-form").addEventListener("submit", function(event) {
 event.preventDefault();
 
 let email = document.getElementById("email").value;
 let password = document.getElementById("password").value;
 
 let users = JSON.parse(localStorage.getItem("/e commerce store/data/user.json")) || [];
 
 // Check if user exists
 let user = users.find(user => user.email === email && user.password === password);
 
 if (user) {
  alert("Login successful!");
  localStorage.setItem("loggedInUser", JSON.stringify(user)); // Save user session
  window.location.href = "/e commerce store/html/profile.html"; // Redirect to profile page
 } else {
  alert("Invalid email or password!");
 }
});