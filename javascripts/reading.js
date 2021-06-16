window.onscroll = function() {myFunction()};

var navigation = document.getElementById("bar");
var stay = navigation.offsetTop;

function myFunction() {
  if (window.pageYOffset <stay) {
    navigation.classList.remove("sticky");
  
  } else {
    navigation.classList.add("sticky")
  }
}