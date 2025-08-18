let index = 0;

function moveSlide(step) {
  const slides = document.getElementById("slides");
  const slide = slides.querySelector(".slide");
  const slideWidth = slide.offsetWidth + 20;
  const visibleSlides = 3;
  const totalSlides = slides.children.length;

  const container = document.querySelector('.slides-wrapper');

  const maxOffset = slides.scrollWidth - container.offsetWidth;
  index = Math.max(0, Math.min(index + step, totalSlides)); // allow going further
  const offset = Math.min(index * slideWidth, maxOffset);

  slides.style.transform = `translateX(-${offset}px)`;
}

window.addEventListener("resize", () => moveSlide(0));
