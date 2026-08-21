const slider = document.getElementById('crampSlider');
const percentText = document.getElementById('percent-text');
const meterLabel = document.getElementById('meter-label');
const catAvatar = document.getElementById('cat-avatar');

const statusData = {
  1: { emoji: "🪶", text: "Mild Cramps 🪶", label: "I'm feeling okay, just light discomfort", cat: "🐱" },
  2: { emoji: "🍫", text: "Snack Cravings 🍫", label: "Bring on the chocolate & sweet treats!", cat: "😿" },
  3: { emoji: "🧸", text: "Warmth & Hugs Needed 🧸", label: "Hot water bottle & cuddles required", cat: "🥺" },
  4: { emoji: "🛌", text: "Heavy Blanket Mode 🛌", label: "Zero effort day—let me just rest", cat: "😭" },
  5: { emoji: "💖", text: "Maximum TLC Required 🚨", label: "Correct answer! I'm taking full care of you today!", cat: "😻✨" }
};

slider.addEventListener('input', (e) => {
  const val = e.target.value;
  const current = statusData[val];
  
  percentText.innerText = current.text;
  meterLabel.innerText = current.label;
  catAvatar.innerText = current.cat;
});

function showPage(pageId) {
  const pages = document.querySelectorAll('.card');
  pages.forEach(page => page.classList.remove('active'));

  const activePage = document.getElementById(pageId);
  if (activePage) {
    activePage.classList.add('active');
  }
}

// Initialize default page and dynamic QR code
window.addEventListener('DOMContentLoaded', () => {
  showPage('page-meter');

  // Dynamically generate QR code pointing to current site URL
  const qrContainer = document.getElementById("qrcode-container");
  if (qrContainer) {
    new QRCode(qrContainer, {
      text: window.location.href,
      width: 160,
      height: 160,
      colorDark : "#c2185b",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
  }
});
