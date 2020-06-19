//JQurey smooth scroll
let windowSize = window.outerWidth;
let navbar = document.querySelector('.navbar');

let previousScrollPos = window.scrollY;
window.onscroll = function() {

let currentScrollPos = window.scrollY;

    
if (previousScrollPos > currentScrollPos) {
    navbar.style.top = '0';
 } else {
     navbar.style.top = '-78px';
 }

 previousScrollPos = currentScrollPos;


//  if (windowSize < 768) {
     
//     if (previousScrollPos > currentScrollPos) {
//         navbar.style.top = '0';
//     } else {
//         navbar.style.top = '-100px';
//     }
    
//      }
//      previousScrollPos = currentScrollPos;

}






// function toggleNavbar() {
//     if ($(window).innerWidth() < 768) {
//         $('.navbar').hide();
//     } else {
//         $('.navbar').show();
//     }
// }

// $(document).ready(function() {
//     toggleNavbar();

//     $(window).resize(function() {
//         toggleNavbar();
//     });
// });

$('.navbar a').on('click', function(event) {
    if(this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);

}});