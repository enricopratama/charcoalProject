var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

// $(window).on("load", function() {
//   $(".lds-ring").fadeOut("slow");
// })

// var loader = document.getElementById("preloader");
// window.addEventListener("load", function () {
//   setTimeout(function () {
//     loader.style.opacity = "0"; // Set the opacity to 0 for a smooth transition
//     setTimeout(function () {
//       loader.style.display = "none"; // Hide the preloader when the transition is complete
//     }, 500); // Adjust this time to match your transition duration (0.5 seconds in this case)
//   }, 1000); // Adjust this time to control when the transition starts (in this case, 2 seconds after the page load)
// });
