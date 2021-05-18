// change content

var currentSlide = 1;
var slides = 2;

document.querySelectorAll("#prev").forEach(item => {
  item.addEventListener("click", function(){
    var newSlide;
    if (currentSlide - 1 < 1){
      newSlide = slides;
    } else {
      newSlide = currentSlide - 1;
    }

    document.getElementById("slide" + currentSlide).classList.toggle("display-slide");
    document.getElementById("slide" + newSlide).classList.toggle("display-slide");

    currentSlide = newSlide;
})
})

document.querySelectorAll("#next").forEach(item => {
  item.addEventListener("click", function(){
  var newSlide;
  if (currentSlide + 1 > slides){
    newSlide = 1;
  } else {
    newSlide = currentSlide + 1;
  }

  document.getElementById("slide" + currentSlide).classList.toggle("display-slide");
  document.getElementById("slide" + newSlide).classList.toggle("display-slide");

  currentSlide = newSlide;
})
})


// slide transition
