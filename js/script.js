console.log("Portfolio Dendi Loaded");
const words = [
    "Human Resources Enthusiast",
    "Administrative Enthusiast",
    "Political Science Graduate"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typing.textContent = current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 50 : 100);

}

typeEffect();


/*==============================
    FORCE TOP ON PAGE LOAD
==============================*/

history.scrollRestoration = "manual";

window.addEventListener("load", () => {

    setTimeout(() => {

        window.scrollTo(0, 0);

    }, 50);

});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

/*==================================
        SCROLL REVEAL
==================================*/

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {

            element.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

/*==================================
        LOADER
==================================*/

window.addEventListener("load",()=>{

    const loader = document.getElementById("loader");

    setTimeout(()=>{

        loader.classList.add("hide");

    },1300);

});

/*==================================
        SCROLL PROGRESS
==================================*/

const progressBar = document.querySelector(".scroll-progress-bar");

window.addEventListener("scroll",()=>{

    const scrollTop = window.scrollY;

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*=============================
    ACTIVE NAVIGATION
==============================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


/*=============================
    BACK TO TOP
==============================*/

const topBtn = document.getElementById("backToTop");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/*=============================
    SCROLL REVEAL
==============================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".reveal").forEach((el)=>{

    observer.observe(el);

});


/*==============================
        MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");
const navOverlay = document.querySelector(".nav-overlay");
const navLinksMobile = document.querySelectorAll(".nav-link");

function openMenu(){

    navMenu.classList.add("active");

    if(navOverlay){
        navOverlay.classList.add("active");
    }

    document.body.classList.add("menu-open");

    const icon = menuBtn.querySelector("i");

    if(icon){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }

}

function closeMenu(){

    navMenu.classList.remove("active");

    if(navOverlay){
        navOverlay.classList.remove("active");
    }

    document.body.classList.remove("menu-open");

    const icon = menuBtn.querySelector("i");

    if(icon){
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

}

if(menuBtn && navMenu){

    menuBtn.addEventListener("click",()=>{

        if(navMenu.classList.contains("active")){

            closeMenu();

        }else{

            openMenu();

        }

    });

}

navLinksMobile.forEach(link=>{

    link.addEventListener("click",closeMenu);

});

if(navOverlay){

    navOverlay.addEventListener("click",closeMenu);

}

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeMenu();

    }

});

window.addEventListener("resize",()=>{

    if(window.innerWidth>768){

        closeMenu();

    }

});