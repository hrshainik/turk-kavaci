const navSlide= ()=>{
    const burGer = document.querySelector(".burger");
    const navLinks = document.querySelector(".items");

burGer.addEventListener("click",() =>{
    navLinks.classList.toggle("nav-active")
});
}

navSlide();
