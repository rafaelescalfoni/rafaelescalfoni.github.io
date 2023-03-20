document.addEventListener("DOMContentLoaded", function () {
  const optionsRegioes = {
    arrows: false,
    pagination: true,
    type: "fade",
    perPage: 1,
    gap: 50,
    breakpoints: {
      640: {
        gap: 15,
      },
    },
  };

  const regioes = document.querySelector(".home__regioes_carrossel");

  // Slider .home__regioes_carrossel (INDEX)
  if (regioes) {
    new Splide(regioes, optionsRegioes).mount();
  }
});
