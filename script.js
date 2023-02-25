let btntoggle = document.querySelector(".btn-toggle");
let menu = document.querySelector(".links-section");

btntoggle.addEventListener("click", function () {
  menu.classList.toggle("show");
});

window.addEventListener("click", function (e) {
  if (e.target === menu) {
    menu.classList.remove("show");
  }
});

let count = 2;

setInterval(function () {
  document.getElementById("radio" + count).checked = true;
  count++;
  if (count > 4) {
    count = 1;
  }
}, 5000);
