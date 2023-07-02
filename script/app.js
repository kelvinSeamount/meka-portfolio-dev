const scrollNav = document.querySelector("nav");

const typeEl = document.querySelector(".type");

document.addEventListener("scroll", function () {
  scrollNav.classList.toggle("window-scroll", window.scrollY > 0);
});

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
