const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function(){

    nav.classList.toggle("active");

    const icon = menuToggle.querySelector("svg");

    if(nav.classList.contains("active")){
        icon.setAttribute("data-lucide","x");
    }else{
        icon.setAttribute("data-lucide","menu");
    }

    lucide.createIcons();

});