function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

function protect() {
  if (!localStorage.getItem("user")) {
    window.location.href = "login.html";
  }
}
