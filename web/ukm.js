// toggle class active
const navbarNAv = document.querySelector(".navbar-nav");
// ketka meenu di click
document.querySelector("#menu").onclick = () => {
  navbarNAv.classList.toggle("active");
};

// ketuk diluar ntuk enutup menu
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNAv.contains(e.target)) {
    navbarNAv.classList.remove("active");
  }
});
