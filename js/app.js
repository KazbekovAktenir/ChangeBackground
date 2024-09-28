const button = document.getElementById("btn");
const color = document.querySelector(".color");

// const colors = [
//   "#FF5733",
//   "#F9FF33",
//   "#3f5e56",
//   "#ff5733",
//   "#ff5733",
//   "#85ff33",
//   "#9c1074",
//   "#4eede3",
// ];

const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

button.addEventListener("click", () => {
  let hexColor = generateHex();
  //   let hexColor = colors[getRandomNumber()];
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function generateHex() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  return hexColor;
}
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }
