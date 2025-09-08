// Default to Allah's names on load
let currentList = namesAllah;
let currentIndex = 0;

const startOverBtn = document.getElementById("start-over");
startOverBtn.addEventListener("click", () => {
  currentIndex = 0;
  showName(currentIndex);
});

// DOM references
const nameArabic = document.getElementById("name-arabic");
const nameTranslit = document.getElementById("name-translit");
const nameUrdu = document.getElementById("name-urdu");
const counter = document.getElementById("counter");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const viewAllah = document.getElementById("view-allah");
const viewProphet = document.getElementById("view-prophet");
const darkToggleBtn = document.getElementById("toggle-dark");

function showName(index) {
  const name = currentList[index];
  nameArabic.textContent = name.arabic;
  nameTranslit.textContent = name.translit;
  nameUrdu.textContent = name.urdu;
  counter.textContent = `Name ${index + 1} of ${currentList.length}`;
}

// Navigation
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentList.length;
  showName(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentList.length) % currentList.length;
  showName(currentIndex);
});

// View toggles
viewAllah.addEventListener("click", () => {
  currentList = namesAllah;
  currentIndex = 0;
  showName(currentIndex);
});

viewProphet.addEventListener("click", () => {
  currentList = namesProphet;
  currentIndex = 0;
  showName(currentIndex);
});

// Theme toggle
darkToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Initial render
showName(currentIndex);




