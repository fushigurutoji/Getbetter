const slider = document.getElementById('crampSlider');
const statusText = document.getElementById('status-text');

const statusMessages = {
  1: "Mild Cramps 🪶",
  2: "Need Snacks & Warmth 🍫",
  3: "Heavy Blanket Mode 🛏️",
  4: "Do Not Disturb / Maximum Care Required 🚨"
};

slider.addEventListener('input', (e) => {
  const val = e.target.value;
  statusText.innerText = statusMessages[val];
});

function showPage(pageId) {
  const pages = document.querySelectorAll('.card');
  pages.forEach(page => page.classList.add('hidden'));

  document.getElementById(pageId).classList.remove('hidden');
}

