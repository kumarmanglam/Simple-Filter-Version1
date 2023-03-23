categories = ['car','showall','fruit','animal','color'];

const showallbtn = document.querySelector(".showallBtn");
const carbtn = document.querySelector(".carBtn");
const fruitbtn = document.querySelector(".fruitBtn");
const colorbtn = document.querySelector(".colorBtn");
const animalbtn = document.querySelector(".animalBtn");


const boxes = document.querySelectorAll(".box");
const cars = document.querySelectorAll(".car");
const fruits = document.querySelectorAll(".fruit");
const colors = document.querySelectorAll(".color");
const animals = document.querySelectorAll(".animal");

showallbtn.addEventListener("click", function() {
  boxes.forEach(function(item) {
    item.style.display="block";
  });
});

carbtn.addEventListener("click", function() {
  boxes.forEach(function(item) {
    item.style.display="none";
  });
  cars.forEach(function(item){
    item.style.display="block";
  });
});

fruitbtn.addEventListener("click", function() {
  boxes.forEach(function(item) {
    item.style.display="none";
  });
  fruits.forEach(function(item){
    item.style.display="block";
  });
});

colorbtn.addEventListener("click", function() {
  boxes.forEach(function(item) {
    item.style.display="none";
  });
  colors.forEach(function(item){
    item.style.display="block";
  });
});

animalbtn.addEventListener("click", function() {
  boxes.forEach(function(item) {
    item.style.display="none";
  });
  animals.forEach(function(item){
    item.style.display="block";
  });
});
