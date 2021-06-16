var popup = document.getElementById('popup');
var image = document.getElementById('images');
var popupImg = document.getElementById('img');

function openpopup() {
    popup.style.display = "block";
    popupImg.src = this.getAttribute("src");
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
popup.style.display = "none";
}
var images = document.querySelectorAll('img');
for(var i=0, len = images.length; i < len; i++){
    images[i].addEventListener('click', openpopup);
}
$(document).ready(function(){
    $('div.nav-bar').css('display', 'none');
    $('div.nav-bar').fadeIn(1000);
    $('div.title').css('display', 'none');
    $('div.title').fadeIn(1000);
    $('div.pictures').css('display', 'none');
    $('div.pictures').fadeIn(1000);
});