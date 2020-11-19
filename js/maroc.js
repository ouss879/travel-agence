var slide = document.getElementById("slide");
var backbtn = document.getElementById("backbtn");
var nextbtn = document.getElementById("nextbtn");

var slideimages = new Array(
  "./image/m2.jpg",
  "./image/m3.jpg",
  "./image/m4.jpg",
  "./image/m5.jpg"
);

let i = 0;
nextbtn.onclick = function () {
  if (i < 3) {
    slide.src = slideimages[i + 1];
    
    i++;
  }
};
backbtn.onclick = function () {
  if (i > 0) {
    slide.src = slideimages[i - 1];
    i--;
  }
};
