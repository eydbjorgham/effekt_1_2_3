window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#red_container").addEventListener("click", redClickHandler);
}

function redClickHandler() {
  console.log("redClickHandler");
  document.querySelector("#red_sprite").classList.add("forsvind");
}
