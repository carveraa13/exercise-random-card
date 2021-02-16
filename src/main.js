import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRamdomSuit());
  document.querySelector(".card").innerHTML = generateRamdomNumber();
};

let generateRamdomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRamdomSuit = () => {
  var suit = ["diamond", "spades", "heart", "club"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
