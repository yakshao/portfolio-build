let homeIcon = document.getElementsByClassName("home-icon")[0].addEventListener("click", () => { window.scrollTo(0, 0); });
let navHome = document.getElementsByClassName("nav-home")[0].addEventListener("click", () => { window.scrollTo(0, 0); });
let mNav = document.querySelector(".m-nav");
let menuIcon = document.querySelector(".menu-icon").addEventListener("click", () => {
  mNav.style.display = "flex"
})
let closeIcon = document.querySelector(".close-icon").addEventListener("click", () => {
    mNav.style.display = "none"
})


