
const slider = document.querySelector('.slider');
let scrollAmount = 0;
let autoScroll;

function startAutoScroll() {
  autoScroll = setInterval(() => {
    scrollAmount += slider.clientWidth;
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0;
    }
    slider.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, 8000); // 8 seconds per image
}

function stopAutoScroll() {
  clearInterval(autoScroll);
}

slider.addEventListener('mouseenter', stopAutoScroll);
slider.addEventListener('mouseleave', startAutoScroll);

let isDown = false;
let startX, scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  stopAutoScroll();
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
  startAutoScroll();
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
  startAutoScroll();
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

startAutoScroll();
