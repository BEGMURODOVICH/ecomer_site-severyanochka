function toggleMenu(button) {
  button.classList.toggle("active");
}

// catalog-modal

// Elementlarni olish
const menuBtn = document.querySelector(".menu-btn");
const catalogModal = document.querySelector(".catolog-modal");

// Tugma bosilganda classni toggle qilish
menuBtn.addEventListener("click", () => {
  catalogModal.classList.toggle("catalog-modal-active");
});
