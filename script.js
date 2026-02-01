const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const celebrate = document.getElementById("celebrate");
const buttons = document.getElementById("buttons");

// Prevent selecting "No"
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

function moveNoButton() {
  const x = Math.random() * (buttons.clientWidth - noBtn.offsetWidth);
  const y = Math.random() * (buttons.clientHeight - noBtn.offsetHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Yes click celebration
yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  celebrate.style.display = "block";
});
