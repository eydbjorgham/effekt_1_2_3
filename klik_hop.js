window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#blue_container").addEventListener("click", blueClickHandler);
}

function blueClickHandler() {
  console.log("blueClickHandler");
  document.querySelector("#blue_sprite").classList.add("hop");
}
