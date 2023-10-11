const navBarBtn = document.querySelector(".main-nav");
const navBar = document.querySelector(".main-navbar");
const exitBtn = document.querySelector(".exitbtn")


navBarBtn.addEventListener("click", () => {
    navBar.classList.toggle("show");
    navBarBtn.classList.toggle("hide");
    exitBtn.addEventListener("click", () => {
        navBar.classList.remove("show");
        navBarBtn.classList.remove("hide");
    })
})

