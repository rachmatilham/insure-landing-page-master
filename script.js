const navButton = document.querySelector(".nav-icon");
const navLink = document.querySelector(".nav-link");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("active");
  navLink.classList.toggle("active");
});
