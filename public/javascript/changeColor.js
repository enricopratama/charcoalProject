let prevScrollY = window.scrollY; // Store the previous scroll position

function handleScroll() {
  const navbar = document.getElementById("main-navbar");
  const currentScrollY = window.scrollY;

  if (currentScrollY > 10 && currentScrollY > prevScrollY) {
    navbar.style.backgroundColor = "transparent";
    navbar.classList.add("hidden");
  } else if (scrollY < 10) {
    navbar.style.backgroundColor = "transparent";
    navbar.classList.remove("hidden");
  } else {
    navbar.style.backgroundColor = "black";
    navbar.classList.remove("hidden");
  }

  prevScrollY = currentScrollY; // Update the previous scroll position
}

window.addEventListener("scroll", handleScroll);
