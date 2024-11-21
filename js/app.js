function toggleMenu(button) {
  button.classList.toggle("active");
}

// catalog-modal
const menuBtn = document.querySelector(".menu-btn");
const catalogModal = document.querySelector(".catolog-modal");
menuBtn.addEventListener("click", () => {
  catalogModal.classList.toggle("catalog-modal-active");
});

// product
const products = [
  {
    id: 1,
    name: "Г/Ц Блинчики с мясом вес, Россия",
    price: 44.5,
    oldPrice: 50.5,
    discount: "-50%",
    rating: 3,
    image: "img/mapping-img/mapping-1.svg",
    buttonText: "В корзину",
  },
  {
    id: 2,
    name: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    price: 44.5,
    oldPrice: 50.5,
    discount: "-50%",
    rating: 4,
    image: "img/mapping-img/mapping-2.svg",
    buttonText: "В корзину",
  },
  {
    id: 3,
    name: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    price: 44.5,
    oldPrice: 50.5,
    discount: "-50%",
    rating: 5,
    image: "img/mapping-img/mapping-3.svg",
    buttonText: "В корзину",
  },
  {
    id: 4,
    name: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    price: 44.5,
    oldPrice: 50.5,
    discount: "-50%",
    rating: 5,
    image: "img/mapping-img/mapping-4.svg",
    buttonText: "В корзину",
  },
];

const ulElement = document.querySelector(".product-list");

ulElement.innerHTML = products
  .map(
    (e) => `
     <li class="product-item">
                <div class="card">
                  <div class="like-btn">
                    <img src="img/like.svg" alt="" />
                  </div>
                  <img
                    class="product-img"
                    src="${e.image}"
                    alt="Блинчики с мясом"
                  />
                  <div class="discount-label">-50%</div>
                  <div class="card-content">
                    <div class="price">
                      <span class="card-price">${e.price} ₽</span>
                      <span class="old-price">${e.oldPrice} ₽</span>
                    </div>
                    <div class="servis">
                      <span class="card">С картой</span>
                      <span class="defoult">Обычная</span>
                    </div>
                    <p class="description">${e.name}</p>
                    <div class="rating">
                      <img src="img/star.svg" alt="" />
                      <img src="img/star.svg" alt="" />
                      <img src="img/star.svg" alt="" />
                      <img src="img/star.svg" alt="" />
                      <img src="img/star.svg" alt="" />
                    </div>
                    <button class="add-to-cart">В корзину</button>
                  </div>
                </div>
              </li>
    `
  )
  .join("");

const newProducts = [
  {
    id: 1,
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: 599.99,
    rating: 3,
    image: "img/new-pro/mapping-1.svg",
  },
  {
    id: 2,
    name: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    price: 44.5,
    rating: 4,
    image: "img/new-pro/mapping-2.svg",
  },
  {
    id: 3,
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: 159.99,
    rating: 5,
    image: "img/new-pro/mapping-3.svg",
  },
  {
    id: 4,
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: 49.35,
    rating: 5,
    image: "img/new-pro/mapping-4.svg",
  },
];
const newProductUl = document.querySelector(".newProduct");

newProductUl.innerHTML = newProducts
  .map(
    (e) => `
     <li class="product-item">
                <div class="card">
                  <div class="like-btn">
                    <img src="img/like.svg" alt="" />
                  </div>
                  <img
                    class="product-img"
                    src="${e.image}"
                    alt="Блинчики с мясом"
                  />
                  <div class="card-content">
                    <div class="price">
                      <span style="margin-bottom: 20px" class="card-price"
                        >${e.price} ₽</span
                      >
                    </div>

                    <p class="description">Г/Ц Блинчики с мясом вес, Россия</p>
                    <div class="rating">
                      <img src="img/star.svg" alt="" />
                      <img src="img/star.svg" alt="" />
                      <img src="img/star.svg" alt="" />
                      <img src="img/star.svg" alt="" />
                      <img src="img/star.svg" alt="" />
                    </div>
                    <button class="add-to-cart">В корзину</button>
                  </div>
                </div>
              </li>
    `
  )
  .join("");

const otherProduct = [
  {
    id: 1,
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: 77.9,
    rating: 3,
    image: "img/new-pro/mapping-5.svg",
  },
  {
    id: 2,
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: 159.99,
    rating: 4,
    image: "img/new-pro/mapping-3.svg",
  },
  {
    id: 3,
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: 599.99,
    rating: 5,
    image: "img/new-pro/mapping-1.svg",
  },
  {
    id: 4,
    name: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    price: 44.39,
    rating: 5,
    image: "img/new-pro/mapping-4.svg",
  },
];

const otherProductUl = document.querySelector(".otherProduct");

otherProductUl.innerHTML = otherProduct
  .map(
    (e) => `
       <li class="product-item">
                <div class="card">
                  <div class="like-btn">
                    <img src="img/like.svg" alt="" />
                  </div>
                  <img
                    class="product-img"
                    src="${e.image}"
                    alt="Блинчики с мясом"
                  />
                  <div class="discount-label">-50%</div>
                  <div class="card-content">
                    <div class="price">
                      <span class="card-price">${e.price} ₽</span>
                    </div>
                    <p class="description">${e.name}</p>
                    <div class="rating">
                      <img src="img/star.svg" alt="" />
                      <img src="img/star.svg" alt="" />
                      <img src="img/star.svg" alt="" />
                      <img src="img/star.svg" alt="" />
                      <img src="img/star.svg" alt="" />
                    </div>
                    <button class="add-to-cart">В корзину</button>
                  </div>
                </div>
              </li>
      `
  )
  .join("");

// map
// Xarita tugmalari
// const buttons = document.querySelectorAll(".map-button");

// // Xaritalar
// const maps = document.querySelectorAll(".map");

// // Tugmaga bosilganda xaritani ko‘rsatish
// buttons.forEach((button) => {
//   button.addEventListener("click", function () {
//     // Barcha xaritalarni yashirish
//     maps.forEach((map) => (map.style.display = "none"));

//     // Tanlangan xaritani ko‘rsatish
//     const mapId = this.getAttribute("data-map");
//     document.getElementById(mapId).style.display = "block";
//   });
// });

let currentMapId = 1;

// Xaritalar ma'lumotlari (iframe URL'lar)
const maps = [
  "https://maps.app.goo.gl/QGoZtNrqYAg6dBuS8", // Xarita 1
  "https://maps.app.goo.gl/cKpMdbKFvxce1ky96", // Xarita 2
  "https://maps.app.goo.gl/y3tuocEYNJfyuyiv9", // Xarita 3
  "https://maps.app.goo.gl/sbYEbAEwM8dvcVUz5", // Xarita 4
];

// Xarita o'zgartirish funktsiyasi
function changeMap(mapId) {
  currentMapId = mapId;
  const mapContainer = document.getElementById("map");
  mapContainer.innerHTML = `<iframe src="${
    maps[mapId - 1]
  }" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
}

// Dastlabki xarita yuklash
window.onload = function () {
  changeMap(currentMapId); // Sahifa yuklanganda birinchi xarita ochiladi
};
