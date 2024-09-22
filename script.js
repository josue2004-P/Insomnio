const images = document.querySelectorAll('.carousel img');
let currentIndex = 1;

function updateCarousel() {
    images.forEach((img, index) => {
        img.classList.remove('large', 'small');
        if (index === currentIndex) {
            img.classList.add('large');
        } else {
            img.classList.add('small');
        }
    });
}

document.getElementById('nextButton').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

document.getElementById('prevButton').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});
