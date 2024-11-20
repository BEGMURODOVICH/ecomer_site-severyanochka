const products = [
  {
    name: "Блинчики с мясом, Россия",
    price: 44.5,
    oldPrice: 50.5,
    discount: "-50%",
    rating: 3,
    image: "blinchiki.jpg", // Rasm fayli manzili
    buttonText: "В корзину",
  },
  {
    name: "Молоко ПРОСТОКВАШИНО паст.",
    price: 44.5,
    oldPrice: 50.5,
    discount: "-50%",
    rating: 4,
    image: "milk.jpg",
    buttonText: "В корзину",
  },
  {
    name: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ",
    price: 44.5,
    oldPrice: 50.5,
    discount: "-50%",
    rating: 5,
    image: "kolbasa.jpg",
    buttonText: "В корзину",
  },
  {
    name: "Сосиски вареные МЯСНАЯ ИСТОРИЯ",
    price: 44.5,
    oldPrice: 50.5,
    discount: "-50%",
    rating: 5,
    image: "sosiski.jpg",
    buttonText: "В корзину",
  },
];

function toggleMenu(button) {
  button.classList.toggle("active");
}

// catalog-modal
const menuBtn = document.querySelector(".menu-btn");
const catalogModal = document.querySelector(".catolog-modal");
menuBtn.addEventListener("click", () => {
  catalogModal.classList.toggle("catalog-modal-active");
});

// filter-price
const minPriceInput = document.getElementById("min-price");
const maxPriceInput = document.getElementById("max-price");
const minSlider = document.getElementById("min-slider");
const maxSlider = document.getElementById("max-slider");
const resetButton = document.getElementById("reset-btn");

// Synchronize inputs with sliders
function updateSliders() {
  minSlider.value = minPriceInput.value;
  maxSlider.value = maxPriceInput.value;
}

function updateInputs() {
  minPriceInput.value = minSlider.value;
  maxPriceInput.value = maxSlider.value;
}

// Update when sliders change
minSlider.addEventListener("input", () => {
  if (parseInt(minSlider.value) > parseInt(maxSlider.value)) {
    minSlider.value = maxSlider.value;
  }
  updateInputs();
});

maxSlider.addEventListener("input", () => {
  if (parseInt(maxSlider.value) < parseInt(minSlider.value)) {
    maxSlider.value = minSlider.value;
  }
  updateInputs();
});

// Update when inputs change
minPriceInput.addEventListener("input", () => {
  if (parseInt(minPriceInput.value) > parseInt(maxPriceInput.value)) {
    minPriceInput.value = maxPriceInput.value;
  }
  updateSliders();
});

maxPriceInput.addEventListener("input", () => {
  if (parseInt(maxPriceInput.value) < parseInt(minPriceInput.value)) {
    maxPriceInput.value = minPriceInput.value;
  }
  updateSliders();
});

// Reset button
resetButton.addEventListener("click", () => {
  minPriceInput.value = 1;
  maxPriceInput.value = 100;
  updateSliders();
});
function updateSlider() {
  let minVal = parseInt(rangeMin.value);
  let maxVal = parseInt(rangeMax.value);

  // Prevent sliders from crossing
  if (minVal >= maxVal) {
    rangeMin.value = maxVal - 1;
    minVal = maxVal - 1;
  }

  if (maxVal <= minVal) {
    rangeMax.value = minVal + 1;
    maxVal = minVal + 1;
  }

  minPrice.value = minVal;
  maxPrice.value = maxVal;

  // **Slider track fonini yangilash**
  const percent1 = (minVal / rangeMin.max) * 100;
  const percent2 = (maxVal / rangeMax.max) * 100;
  sliderTrack.style.background = `linear-gradient(to right, #ddd ${percent1}%, #4caf50 ${percent1}%, #4caf50 ${percent2}%, #ddd ${percent2}%)`;
}
