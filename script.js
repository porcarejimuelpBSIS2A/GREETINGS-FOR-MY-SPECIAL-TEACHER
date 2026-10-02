const folder = document.getElementById("folder");
const openButton = document.getElementById("openButton");
const replayButton = document.getElementById("replayButton");
const instruction = document.getElementById("instruction");

function setOpen(isOpen) {
  folder.classList.toggle("open", isOpen);
  openButton.setAttribute("aria-expanded", String(isOpen));
  replayButton.hidden = !isOpen;
  instruction.textContent = isOpen
    ? "Your message is open. Close the card whenever you're ready."
    : "Tap or click the folder to open your greeting.";
}

openButton.addEventListener("click", () => setOpen(true));
replayButton.addEventListener("click", () => setOpen(false));
