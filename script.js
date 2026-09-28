(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const previousButton = document.querySelector(".control--previous");
  const nextButton = document.querySelector(".control--next");
  const currentProgress = document.querySelector(".progress-current");
  let currentSlide = 0;

  function showSlide(nextSlide) {
    currentSlide = (nextSlide + slides.length) % slides.length;
    slides.forEach((slide, index) => {
      const isActive = index === currentSlide;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });
    currentProgress.textContent = String(currentSlide + 1).padStart(2, "0");
  }

  function move(direction) {
    showSlide(currentSlide + direction);
  }

  previousButton.addEventListener("click", () => move(-1));
  nextButton.addEventListener("click", () => move(1));

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight" || event.key === " ") {
      event.preventDefault();
      move(1);
    }
  });

  document.querySelector(".slide-deck").addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    const direction = event.clientX < window.innerWidth / 2 ? -1 : 1;
    move(direction);
  });
})();
