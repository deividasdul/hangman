$(document).ready(() => {
  $("button").on("mouseover", () => {
    var hoverSound = new Audio("./sounds/hover.mp3");
    hoverSound.play();
  });

  // var buttons = document.querySelectorAll(".letter");
  // buttons.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     console.log(button.classList.add("clicked"));
  //   });
  // });

  $(".letter").on("click", function () {
    $(this).addClass("clicked");
  });
});
