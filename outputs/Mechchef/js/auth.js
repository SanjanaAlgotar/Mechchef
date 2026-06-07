const tabButtons = document.querySelectorAll("[data-auth-tab]");
const loginForm = document.querySelector("#loginForm");
const registerForm = document.querySelector("#registerForm");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    const isLogin = button.dataset.authTab === "login";
    loginForm.classList.toggle("hidden", !isLogin);
    registerForm.classList.toggle("hidden", isLogin);
  });
});

[loginForm, registerForm].forEach((form) => {
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = form === loginForm ? "customer-dashboard.html" : "meals.html";
  });
});
