let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split(""); // Split into characters, including spaces
    word.textContent = ""; // Clear the text content
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter === " " ? "\u00A0" : letter; // Replace space with a non-breaking space
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord =
        currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    // Animate letters out (drop down)
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    // Reset opacity of the current word after animation
    setTimeout(() => {
        currentWord.style.opacity = "0";
    }, currentWord.children.length * 80);

    // Animate letters in (drop in)
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter in";
        setTimeout(() => {
            letter.className = "letter behind";
        }, 340 + i * 80);
    });

    // Update currentWordIndex
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);


// circle skill-----------------------------------------

// const circles = document.querySelectorAll('.circle');
// circles.forEach(elem => {
//     var dots = elem.getAttribute("date-dots");
//     var marked = elem.getAttribute("date-percent");
//     var percent = Math.floor(dots*marked/100);
//     var points = "";
//     var rotate = 360 / dots;

//     for(let i = 0 ; i < dots ; i++){
//         points += `<div class="points" style="--i:${1}; --rot:${rotate}deg"></div>`;
//     }
//     elem.innerHTML = points;

//     const pointsMarked = elem.querySelectorAll('.points');
//     for(let i = 0; i<percent ; i++){
//         pointsMarked[i].classList.add('marked');
//     }
// })


const circles = document.querySelectorAll('.circle');
circles.forEach((elem) => {
    const dots = parseInt(elem.getAttribute("date-dots"), 10);
    const marked = parseInt(elem.getAttribute("date-percent"), 10);
    const percent = Math.floor((dots * marked) / 100);
    const rotate = 360 / dots;

    let points = "";

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll(".points");
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add("marked");
    }
});



// mix it up portfolio 

var mixer = mixitup('.portfolio-gallery');



// active menu ----------------------------------

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu() {
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);



// sticky navbar ------------------------------------

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50);
})



// toggle menu navbar ------------------------------------

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

menuIcon.onsroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.replace("open");
}

// parallax /////////////////////////////////////////////

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    })
})

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));


