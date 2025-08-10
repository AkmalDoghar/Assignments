// ——— DOM refs ———
const monthYear    = document.getElementById("month-year");
const calendarGrid = document.getElementById("calendar-dates");
const prevBtn      = document.getElementById("prev");
const nextBtn      = document.getElementById("next");

const btnDark   = document.getElementById("toggle-dark");
const btnMonths = document.getElementById("show-months");
const btnYears  = document.getElementById("show-years");
const btnBack   = document.getElementById("back-to-days");


// ——— State ———
let date         = new Date();
let currentMonth = date.getMonth();
let currentYear  = date.getFullYear();
let viewMode     = "days";            // 'days' | 'months' | 'years'

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

// ——— Helpers ———
function showBack(show){
  btnBack.style.display = show ? "block" : "none";
}

// ——— Renders ———
function renderDays(m, y){
  viewMode = "days";
  showBack(false);
  calendarGrid.className = "calendar-grid dates";

  const first = new Date(y, m, 1).getDay();
  const total = new Date(y, m + 1, 0).getDate();
  const today = new Date();

  monthYear.textContent = `${months[m]} ${y}`;
  calendarGrid.innerHTML = "";

  // blank cells
  for (let i = 0; i < first; i++){
    calendarGrid.appendChild(document.createElement("div"));
  }

  for (let d = 1; d <= total; d++){
    const cell = document.createElement("div");
    cell.textContent = d;

    const isToday = d === today.getDate() &&
                    m === today.getMonth() &&
                    y === today.getFullYear();
    if (isToday) cell.classList.add("today");

    calendarGrid.appendChild(cell);
  }
}

function renderMonths(y){
  viewMode = "months";
  showBack(true);
   calendarGrid.className = "calendar-grid dates";

  monthYear.textContent = `Select Month`;
  calendarGrid.innerHTML = "";

  months.forEach((mon, idx) => {
    const cell = document.createElement("div");
    cell.textContent = mon.slice(0,3);       // short name
    cell.classList.add("selector-box");
    if (idx === currentMonth && y === currentYear){
      cell.classList.add("current-select");
    }
    cell.onclick = () => {
      currentMonth = idx;
      renderDays(currentMonth, currentYear);
    };
    calendarGrid.appendChild(cell);
  });
}

let yearPageOffset = 0; // global page offset for year paging

function renderYears() {
  viewMode = "years";
  showBack(true);
   calendarGrid.className = "calendar-grid year-grid"; 

  const baseYear = Math.floor(currentYear / 20) * 20 + yearPageOffset;
  monthYear.textContent = `Select Year`;
  calendarGrid.innerHTML = "";

  for (let i = 0; i < 20; i++) {
    const y = baseYear + i;
    const cell = document.createElement("div");
    cell.textContent = y;
    cell.classList.add("selector-box");

    if (y === currentYear) {
      cell.classList.add("current-select");
    }

    cell.onclick = () => {
      currentYear = y;
      renderDays(currentMonth, currentYear);
    };

    calendarGrid.appendChild(cell);
  }
}


// ——— Navigation ———
prevBtn.onclick = () => {
  if (viewMode === "years") {
    yearPageOffset -= 20;
    renderYears();
  } else if (viewMode === "days") {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderDays(currentMonth, currentYear);
  }
};

nextBtn.onclick = () => {
  if (viewMode === "years") {
    yearPageOffset += 20;
    renderYears();
  } else if (viewMode === "days") {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderDays(currentMonth, currentYear);
  }
};

// ——— Buttons ———
btnDark.onclick   = () => document.body.classList.toggle("dark");
btnMonths.onclick = () => renderMonths(currentYear);
btnYears.onclick = () => {
  yearPageOffset = 0;  // reset to current year page
  renderYears();
};

btnBack.onclick   = () => renderDays(currentMonth, currentYear);

// ——— Initial paint ———
renderDays(currentMonth, currentYear);






