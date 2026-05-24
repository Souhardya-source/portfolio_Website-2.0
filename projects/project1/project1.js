// ================= HEADER EFFECT =================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.background = "rgba(10,10,10,0.8)";
        header.style.boxShadow = "0 5px 30px rgba(0,0,0,0.35)";

    }
    else{

        header.style.background = "rgba(255,255,255,0.04)";
        header.style.boxShadow = "none";

    }

});

// ================= SCROLL REVEAL =================

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(80px)";
    section.style.transition = "1s";

});