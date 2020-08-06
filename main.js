/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
 ********************/

const getRandomNumber = function (max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);

  return result;
};

const sortByNumber = function (arr) {
  const byNumber = function (item1, item2) {
    return item1 - item2;
  };

  return arr.slice().sort(byNumber);
};

/*******************
 * YOUR CODE BELOW *
 *******************/
//starting images
let imgSix = document.querySelector("#d6-roll");
imgSix.src = "./images/start/d6.png";

//two sixex
let imgsix1 = document.querySelector("#double-d6-roll-1");
imgsix1.src = "./images/start/d6.png";

let imgsix2 = document.querySelector("#double-d6-roll-2");
imgsix2.src = "./images/start/d6.png";

//dice 12
let img12 = document.querySelector("#d12-roll");
img12.src = "./images/start/d12.jpeg";

//dice 20
let img20 = document.querySelector("#d20-roll");
img20.src = "./images/start/d20.jpg";

//roll6
const roll6 = function () {
  let num = getRandomNumber(6);
  imgSix.src = `/images/d6/${num}.png`;
  sixes.push(num);
  document.querySelector("#d6-rolls-mean").innerText = Mean(sixes);
  document.querySelector('#d6-rolls-median').innerText = median(sixes);
};

//two six dices
const roll2six = function () {
  let num1 = getRandomNumber(6);
  let num2 = getRandomNumber(6);
  doubleSixes.push(num1 + num2);
  imgsix1.src = `./images/d6/${num1}.png`;
  imgsix2.src = `./images/d6/${num2}.png`;
  document.querySelector("#double-d6-rolls-mean").innerText = Mean(doubleSixes);
  document.querySelector('#double-d6-rolls-median').innerText = median(doubleSixes);
};

//roll dice12
const roll12 = function(){
  let num = getRandomNumber(12);
  twelves.push(num);
  img12.src = `./images/numbers/${num}.png`;
  document.querySelector('#d12-rolls-mean').innerText = Mean(twelves);
  document.querySelector('#d12-rolls-median').innerText = median(twelves);
}

//roll dice20
const roll20 = function(){
  let num = getRandomNumber(20);
  twenties.push(num);
  img20.src = `./images/numbers/${num}.png`;
  document.querySelector('#d20-rolls-mean').innerText = Mean(twenties);
  document.querySelector('#d20-rolls-median').innerText = median(twenties);
}

/*******************
 * EVENT LISTENERS *
 *******************/
imgSix.addEventListener("click", roll6);
imgsix1.addEventListener("click", roll2six);
imgsix2.addEventListener("click", roll2six);
img12.addEventListener('click', roll12);
img20.addEventListener('click', roll20);
/******************
 * RESET FUNCTION *
 ******************/
const reset1 = document.querySelector("#reset-button");

const resetAll = function () {
  sixes.length = 0;
  doubleSixes.length = 0;
  twelves.length = 0;
  twenties.length = 0;
  imgSix.src = "./images/start/d6.png";
  imgsix1.src = "./images/start/d6.png";
  imgsix2.src = "./images/start/d6.png";
  img12.src = "./images/start/d12.jpeg";
  img20.src = "./images/start/d20.jpg";
  document.querySelector("#d6-rolls-mean").innerHTML = `&nbsp`;
  document.querySelector("#double-d6-rolls-mean").innerHTML = `&nbsp`;
  document.querySelector("#d12-rolls-mean").innerHTML = `&nbsp`;
  document.querySelector("#d20-rolls-mean").innerHTML = `&nbsp`;
  document.querySelector("#d20-rolls-median").innerHTML = `&nbsp`;
};

reset1.addEventListener("click", resetAll);

/****************
 * MATH SECTION *
 ****************/
// let sum1 = 0;
const Mean = function (arr) {
  let sum1 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 = sum1 + arr[i];
  }
  return (sum1 / arr.length).toFixed(2);
};

const median = function (arr){
  // let midValue = [];?
  let result = 0
  var newArr = sortByNumber(arr);
  if (newArr.length % 2 !== 0){
    result = newArr[Math.floor(newArr.length/2)];
  } else {
    result = (newArr[newArr.length/2] + newArr[(newArr.length/2) - 1]) / 2;
  }

  return result;
  
}
