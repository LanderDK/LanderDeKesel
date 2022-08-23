if (sessionStorage.hasOwnProperty("name")) {
  h1Hallo.innerText = `Hallo ${sessionStorage.getItem("name")}, ik ben`;
}

if (!sessionStorage.hasOwnProperty("nameEntered")) {
  // alert(
  //   "Note:\n\nDeze website is nog in opbouw!\nDe huidige staat is niet representatief voor het eindresultaat."
  // );

  let naam;
  naam = prompt(
    "Hallo daar!\nHoe mag ik u aanspreken? (annuleer indien nodig)"
  );

  if (naam != null) {
    const h1Hallo = document.getElementById("h1Hallo");
    h1Hallo.innerText = `Hallo ${naam}, ik ben`;
    sessionStorage.setItem("nameEntered", true);
    sessionStorage.setItem("name", naam);
  }
}

//animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();