document.getElementById('waitlist-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Obrigado por se inscrever, ${name}!`);
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
});

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    document.querySelector('.carousel-slide').style.transform = `translateX(${-slideIndex * 100}%)`;
}
