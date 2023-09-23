const menuBtn = document.querySelector("#menubar");

menuBtn.addEventListener("click", function () {
  var navLinks = document.querySelector(".navlinks");
  navLinks.classList.toggle("show");
});

function validate() {
  var message = document.getElementById("msgbox").value;

  if (message.length < 15) {
    document.getElementById("error").innerText =
      "Must be more than 15 Characters";
  } else {
    document.getElementById("error").innerText = "Okay, Processing....";
  }
}

function submit() {
  var emay = document.getElementById("email").value;
  var msgBox = document.getElementById("msgbox").value;
  var userInput = document.getElementById("username").value;
  if (emay && msgBox && userInput !== "") {
  }
}

var closeBtn = document.getElementById("closeBtn");
var contactBtn = document.getElementById("contactmeBtn");
var contactForm = document.getElementById("abs-form");

contactBtn.addEventListener("click", function () {
  contactForm.classList.add("show-form");
});

closeBtn.addEventListener("click", function () {
  contactForm.classList.remove("show-form");
});

window.addEventListener("click", function (e) {
  if (e.target === contactForm) {
    contactForm.classList.remove("show-form");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// Disable right-click
// document.addEventListener('contextmenu', (e) => e.preventDefault());

// function ctrlShiftKey(e, keyCode) {
//   return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
// }

// document.onkeydown = (e) => {
//   // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
//   if (
//     event.keyCode === 123 ||
//     ctrlShiftKey(e, 'I') ||
//     ctrlShiftKey(e, 'J') ||
//     ctrlShiftKey(e, 'C') ||
//     (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
//   )
//     return false;
// };
window.onscroll = function() {
  scrollFunction();
}

function scrollFunction() {
if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
  document.getElementById('navbartop').style.backgroundColor="#17112b";
}else {
  document.getElementById('navbartop').style.background="none"
}
}






