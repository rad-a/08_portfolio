//Hide and show navbar while scrolling up and down

let windowSize = window.outerWidth;
let navbar = document.querySelector(".navbar");

let previousScrollPos = window.scrollY;
window.onscroll = function () {
  let currentScrollPos = window.scrollY;

  if (previousScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-78px";
  }

  previousScrollPos = currentScrollPos;
};

//Navbar smooth scroll

$(".navbar a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

