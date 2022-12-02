// for the slider

var index = 0;
var slides = document.querySelectorAll(".slides");
// var dot = document.querySelectorAll(".dot");

function changeSlide() {
// checking the if pic is the last pic
  if (index < 0) {
    index = slides.length - 1;
  }

  if (index > slides.length - 1) {
    index = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // dot[i].classList.remove("active");
  }

  slides[index].style.display = "block";
  // dot[index].classList.add("active");

  index++;

  setTimeout(changeSlide, 2000);

}
changeSlide();
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    // to make the drop down
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




