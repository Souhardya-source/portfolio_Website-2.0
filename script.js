// ================= LOADER =================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 2500);

});

// ================= SCROLL HEADER =================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 50){

    header.style.background = "rgba(10,10,10,0.75)";
    header.style.boxShadow = "0 5px 30px rgba(0,0,0,0.35)";

    }
    else{

        header.style.background = "rgba(255,255,255,0.04)";
        header.style.boxShadow = "none";

    }

});

// ================= SIMPLE SCROLL ANIMATION =================

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){
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

// ================= FORM SUBMISSION =================

const form = document.querySelector(".contact-form");
const status = document.querySelector(".form-status");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {

        method: form.method,
        body: data,

        headers: {
            'Accept': 'application/json'
        }

    });

    if(response.ok){

        status.innerHTML = "Message sent successfully!";

        form.reset();

        // Remove message after 5 seconds

        setTimeout(() => {

            status.innerHTML = "";

        }, 5000);

    }
    else{

        status.innerHTML = "Oops! Something went wrong.";

        setTimeout(() => {

            status.innerHTML = "";

        }, 5000);

    }

});