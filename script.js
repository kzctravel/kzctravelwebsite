
const slider = document.querySelector('.slider');
let autoScroll;
let currentIndex = 0;

function startAutoScroll() {
  autoScroll = setInterval(() => {
    const totalSlides = slider.children.length;
    currentIndex++;

    if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }

    const scrollPosition = slider.children[currentIndex].offsetLeft;
    slider.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }, 4000); // Change this value to adjust timing
}

function stopAutoScroll() {
  clearInterval(autoScroll);
}

slider.addEventListener('mouseenter', stopAutoScroll);
slider.addEventListener('mouseleave', startAutoScroll);

startAutoScroll();
