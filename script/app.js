/*---------------NAV-CHANGE-------------*/

const scrollNav = document.querySelector("nav");
document.addEventListener("scroll", function () {
  scrollNav.classList.toggle("window-scroll", window.scrollY > 0);
});

/*---------------TYPING-------------*/
const typeEl = document.querySelector(".type");

const words = ["Front-End", "Developer", "Based", "In", "Bremen", "Germany"];

let count = 0;

let letterCount = 0;

// Create a function
const displayType = function () {
  if (count === words.length) {
    count = 0;
  }

  //select a current word to be displayed
  let displayWords = words[count];

  //to display the words letter by letter
  let letter = displayWords.slice(0, ++letterCount);
  typeEl.textContent = letter;
  if (letter.length === displayWords.length) {
    letterCount = 0;
    count++;
  }
  setTimeout(displayType, 380);
};
displayType();

/*----TO DISPLAY MENU---*/
const menuNav = document.querySelector(".nav-menu");
const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

openMenuBtn.addEventListener("click", function () {
  menuNav.style.display = "flex";
  closeMenuBtn.style.display = "inline-block";
  openMenuBtn.style.display = "none";
});

const closebtn = function () {
  menuNav.style.display = "none";
  closeMenuBtn.style.display = "none";
  openMenuBtn.style.display = "block";
};

closeMenuBtn.addEventListener("click", closebtn);

/*----TO-DISPLAY-DARK-MODE----*/
const iconEl = document.querySelector(".icon-moon");

iconEl.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    iconEl.src = "./asset/sun.png";
    /*document.getElementById("tags").style.color = "#fff";*/
  } else {
    iconEl.src = "./asset/moon.png";
  }
});
