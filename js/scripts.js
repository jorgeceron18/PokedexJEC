document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      var targetSection = document.querySelector(this.getAttribute("href"));

      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});
