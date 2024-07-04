const btn = document.getElementById("btn");
const links = document.querySelector(".navbar_links");

btn.addEventListener("click", (e) => {
  links.classList.toggle("active");
});
