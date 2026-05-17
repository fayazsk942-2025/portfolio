const typingElement = document.querySelector(".typing");

const professions = [
    "AI/ML Engineer",
    "Python Developer",
    "Deep Learning Engineer",
    "Computer Vision Developer",
    "Full Stack Developer",
    "RAG Chatbot Developer"
];

let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    const currentProfession = professions[professionIndex];

    if(!isDeleting){

        typingElement.textContent =
        currentProfession.substring(0,charIndex + 1);

        charIndex++;

        if(charIndex === currentProfession.length){

            isDeleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }
    else{

        typingElement.textContent =
        currentProfession.substring(0,charIndex - 1);

        charIndex--;

        if(charIndex === 0){

            isDeleting = false;

            professionIndex++;

            if(professionIndex === professions.length){
                professionIndex = 0;
            }

        }

    }

    setTimeout(typeEffect,isDeleting ? 70 : 120);

}

typeEffect();

/* Navbar Background Scroll Effect */

window.addEventListener("scroll",function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.background = "rgba(0,0,0,0.8)";

    }
    else{

        nav.style.background = "rgba(0,0,0,0.4)";

    }

});