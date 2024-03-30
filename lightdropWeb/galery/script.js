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

// 当页面滚动时，显示或隐藏按钮
window.addEventListener('scroll', function() {
var scrollToTopBtn = document.getElementById('scrollToTopBtn');
if (window.scrollY > 100) {
scrollToTopBtn.style.display = 'block';
} else {
scrollToTopBtn.style.display = 'none';
}
});

// 点击按钮回到页面顶部
document.getElementById('scrollToTopBtn').addEventListener('click', function() {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});
