window.addEventListener("keydown", keydownEvent);

function keydownEvent(e) {
  eventHappening(e.keyCode);
}

function eventHappening(code) {
  const audio = document.querySelector(`audio[data-key="${code}"]`);
  const key = document.querySelector(`.key[data-key="${code}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

let keys = document.querySelectorAll(".key");

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("click", clickEvent));

function clickEvent() {
  const currentDiv = this.closest("div > .key");
  let currentDivValue = currentDiv.getAttribute("value");
  eventHappening(currentDivValue);
}
