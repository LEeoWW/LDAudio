let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block";
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById('scrollToTopBtn').style.display = 'block';
}

var scrollToTopBtn = document.getElementById('scrollToTopBtn');


window.addEventListener('scroll', function() {
var scrollToTopBtn = document.getElementById('scrollToTopBtn');
if (window.scrollY > 100) {
scrollToTopBtn.style.display = 'block';
} else {
scrollToTopBtn.style.display = 'none';
}
});


document.getElementById('scrollToTopBtn').addEventListener('click', function() {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});



document.addEventListener("DOMContentLoaded", function() {

    let links = document.querySelectorAll(".dropdown-content a");
 


    let menu = document.querySelector(".menu");
    let galeria = document.querySelector(".galeria");
    let otras = document.querySelector(".otras");


    
    links.forEach(link => {
        link.addEventListener("click", () => {
           
            document.querySelector(".dropdown-content .active").classList.remove("active");
          
            link.classList.add("active");

            
            let language = link.getAttribute("language");

         
            menu.textContent = data[language].menu;
            galeria.textContent = data[language].galeria;
            otras.textContent = data[language].otras;
        });
    });
});

let data = {
    espanyolGal: {
        menu:"menú",
        galeria:"galería",
        otras:"otras",
    
    },
    valencianoGal: {
         menu:"menú",
         galeria:"galeria",
         otras:"altres",

    },  
    englishGal: {
         menu:"menu",
         galeria:"gallery",
         otras:"others",
    },
}
