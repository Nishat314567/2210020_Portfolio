
const words = ["Computer Science Student", "Flutter Developer", "Web Developer", "Problem Solver"];
let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function type() {
  const word = words[wordIndex];

  if (deleting) {
    letterIndex--;
  } else {
    letterIndex++;
  }

  document.getElementById("typing").textContent = word.slice(0, letterIndex);

  let speed = deleting ? 50 : 110;

  if (!deleting && letterIndex === word.length) {
    deleting = true;
    speed = 1500;               // shesh hole ektu thamo
  } else if (deleting && letterIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 300;
  }

  setTimeout(type, speed);
}
type();

// ===== Mobile menu (3 line button e click korle menu khulbe) =====
const menuBtn = document.getElementById("menuBtn");
const menuList = document.getElementById("menuList");

menuBtn.onclick = function () {
  menuList.classList.toggle("open");
};

// Kono menu te click korle menu bondho hobe
menuList.onclick = function () {
  menuList.classList.remove("open");
};