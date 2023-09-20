
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
     // Scroll to top logic
     rootElement.scrollTo({
          top: 0,
          behavior: "smooth"
     });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
function changeImage() {
     var image = document.getElementById('myImage');
     if (image.src.match("hamburger")) {
          image.src = "images/cross.svg";
     } else {
          image.src = "images/hamburger.svg";
     }
}
$("#hamburger").on('click', function (e) {
     $(".search-fix").toggleClass("input-show");
});

// Get the button
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
     if (document.body.scrollTop > 370 || document.documentElement.scrollTop > 370) {
          $('#scrollToTopBtn').addClass('newClass');
     } else {
          $('#scrollToTopBtn').removeClass('newClass');
     }
}
// set the dropdown menu element
const $targetEl = document.getElementById('dropdownMenu');

// set the element that trigger the dropdown menu on click
const $triggerEl = document.getElementById('dropdownButton');

// options with default values
const options = {
     placement: 'bottom',
     triggerType: 'click',
     offsetSkidding: 0,
     offsetDistance: 10,
     delay: 10,
     ignoreClickOutsideClass: false,
     onHide: () => {
          console.log('dropdown has been hidden');
     },
     onShow: () => {
          console.log('dropdown has been shown');
     },
     onToggle: () => {
          console.log('dropdown has been toggled');
     }
};

document.addEventListener("DOMContentLoaded", function () {
     window.addEventListener('scroll', function () {
          if (window.scrollY > 430) {
               document.getElementById('navbar_top').classList.add('fixed-top');
               // add padding top to show content behind navbar
               navbar_height = document.querySelector('.navbar').offsetHeight;
               document.body.style.paddingTop = navbar_height + 'px';
          } else {
               document.getElementById('navbar_top').classList.remove('fixed-top');
               // remove padding top from body
               document.body.style.paddingTop = '0';
          }
     });
});

