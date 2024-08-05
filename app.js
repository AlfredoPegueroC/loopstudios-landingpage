const btn = document.getElementById("btn");
const links = document.querySelector(".navbar_links");
const navbar = document.querySelector("#id_navbar");

btn.addEventListener("click", (e) => {
  links.classList.toggle("active");
  navbar.classList.toggle("active");
  
  if (btn.attributes.src.textContent== "./images/icon-hamburger.svg") {
    btn.src = "./images/icon-close.svg";
  } else {
    btn.src = "./images/icon-hamburger.svg";
  }

});
