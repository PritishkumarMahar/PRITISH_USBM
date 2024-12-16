const users = JSON.parse(localStorage.getItem("users")) || [];

// manupulate html element

const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

//display dashboard if the user is logged in
function showView(view) {
  document.getElementById("signup").style.display =
    view === "signup" ? "block" : "none";
  document.getElementById("login").style.display =
    view === "login" ? "block" : "none";
  document.getElementById("dashboard").style.display =
    view === "dashboard" ? "block" : "none";
}
// show view

// Add event
signupBtn.addEventListener("click", signup);
loginBtn.addEventListener("click", login);
logoutBtn.addEventListener("click", logout);

function signup() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const newUser = {
    name: username,
    email: email,
    password: password,
  };
  // Check if user already exists
  const userExists = users.find((user) => user.name === username);
  if (userExists) {
    alert("Username already exists. Please choose a different one.");
    return;
  }

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful! You can now log in.");
  showView("login");
}

// login

function login() {
  const email = document.getElementById("email").value;

  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("users")) || [];
  const user = storedUser.find(
    (user) => user.email === email && user.password === password
  );
}
if (user) {
  const loggedUser = localStorage.setItem("loggedUser", JSON.stringify(user));
  alert("Login Successfully");
  showDashboard();
} else {
  alert("Invalid credentials");
}

// Show dashboard with a welcome message
function showDashboard() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  document.getElementById(
    "usernameDisplay"
  ).innerText = `Hey ${user.name} welcome !!`;
  showView("dashboard");
}

// Logout function
function logout() {
  localStorage.removeItem("loggedUser");
  alert("You've successfully logged out !!");
  showView("signup");
}