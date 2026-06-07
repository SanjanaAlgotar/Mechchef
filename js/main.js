const mealSearch = document.querySelector("#mealSearch");
const cuisineFilter = document.querySelector("#cuisineFilter");
const dietFilter = document.querySelector("#dietFilter");
const listings = [...document.querySelectorAll(".listing")];

function filterMeals() {
  const search = (mealSearch?.value || "").trim().toLowerCase();
  const cuisine = cuisineFilter?.value || "all";
  const diet = dietFilter?.value || "all";

  listings.forEach((listing) => {
    const matchesSearch = !search || listing.dataset.search.includes(search);
    const matchesCuisine = cuisine === "all" || listing.dataset.cuisine === cuisine;
    const matchesDiet = diet === "all" || listing.dataset.diet === diet;
    listing.hidden = !(matchesSearch && matchesCuisine && matchesDiet);
  });
}

[mealSearch, cuisineFilter, dietFilter].forEach((control) => {
  control?.addEventListener("input", filterMeals);
});

document.querySelectorAll(".add-cart").forEach((button) => {
  button.addEventListener("click", () => {
    button.textContent = "Added";
    button.disabled = true;
    setTimeout(() => {
      button.textContent = "Add";
      button.disabled = false;
    }, 1200);
  });
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button[type='submit']");
    if (button) {
      const original = button.textContent;
      button.textContent = "Done";
      setTimeout(() => {
        button.textContent = original;
      }, 1300);
    }
  });
});
