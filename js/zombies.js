//Get Current Year Script
function currentYear() {
    let d = new Date();
    document.getElementById('copyright').innerHTML = d.getFullYear();
}
window.onload = function() {
    currentYear();
}



//Makes Button Appear Script
// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("cornerBtn").style.display = "block";
  } else {
    document.getElementById("cornerBtn").style.display = "none";
  }
}


//Click button Script
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




//Countdown Script
// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();
    
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an html element
  document.getElementById("displaytimer").innerHTML = days + " days, " + hours + " hours, "
  + minutes + " minutes, " + seconds + " seconds, ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("displaytimer").innerHTML = "EXPIRED";
  }
}, 1000);

//Slideshow Script
let intIndex = 0;

function showImage(i) {
    intIndex += i;

    let images = document.getElementsByClassName("image");
    let dots = document.getElementsByClassName("dot");
    
    for(n = 0; n < images.length; n++) {
        images[n].style.display = "none";
        dots[n].className = dots[n].className.replace(" active", "");
    }

    if(intIndex > images.length -1) {
        intIndex = 0;
    }
    if(intIndex < 0) {
        intIndex = images.length -1;
    }

    images[intIndex].style.display = "block";
    dots[intIndex].className += " active";
}
window.onload = function() {
    currentYear();
}