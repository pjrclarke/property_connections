document.addEventListener("DOMContentLoaded", function() {
    var leftSection = document.querySelector(".left-animate");
    var rightSection = document.querySelector(".right-animate");

    window.addEventListener("scroll", function() {
      var leftSectionTop = leftSection.getBoundingClientRect().top;
      var rightSectionTop = rightSection.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (leftSectionTop < windowHeight / 2) {
        leftSection.style.opacity = "1";
        leftSection.style.transform = "translateX(0)";
      } else {
        leftSection.style.opacity = "0";
        leftSection.style.transform = "translateX(-100px)";
      }

      if (rightSectionTop < windowHeight / 2) {
        rightSection.style.opacity = "1";
        rightSection.style.transform = "translateX(0)";
      } else {
        rightSection.style.opacity = "0";
        rightSection.style.transform = "translateX(100px)";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var leftSection = document.querySelector(".left-animate2");
    var rightSection = document.querySelector(".right-animate2");

    window.addEventListener("scroll", function() {
      var leftSectionTop = leftSection.getBoundingClientRect().top;
      var rightSectionTop = rightSection.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (leftSectionTop < windowHeight / 2) {
        leftSection.style.opacity = "1";
        leftSection.style.transform = "translateY(0)";
      } else {
        leftSection.style.opacity = "0";
        leftSection.style.transform = "translateX(-100px)";
      }

      if (rightSectionTop < windowHeight / 2) {
        rightSection.style.opacity = "1";
        rightSection.style.transform = "translateY(0)";
      } else {
        rightSection.style.opacity = "0";
        rightSection.style.transform = "translateX(100px)";
      }
    });
  });

  function checkScreenSize() {
    var stackableSections = document.querySelectorAll('.stackable-section');

    if (window.innerWidth < 768) { // Change 768 to your desired breakpoint
        stackableSections.forEach(function(section) {
            section.classList.add('stacked');
        });
    } else {
        stackableSections.forEach(function(section) {
            section.classList.remove('stacked');
        });
    }
}

// Initial check
checkScreenSize();

// Check screen size whenever the window is resized
window.addEventListener("resize", checkScreenSize);