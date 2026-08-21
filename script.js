const slider = document.getElementById('loveSlider');
const percentText = document.getElementById('percent-text');
const meterLabel = document.getElementById('meter-label');
const catAvatar = document.getElementById('cat-avatar');
const nextBtn = document.getElementById('next-to-gifts');

slider.addEventListener('input', (e) => {
  const val = parseInt(e.target.value);
  
  // Calculate dynamic love percentages up to 1000%
  let displayVal = val * 10; 
  percentText.innerText = `${displayVal}%`;

  if (val < 20) {
    catAvatar.innerText = "😿";
    meterLabel.innerText = "Only that much?";
  } else if (val < 45) {
    catAvatar.innerText = "😿";
    meterLabel.innerText = "That hurts...";
  } else if (val < 65) {
    catAvatar.innerText = "😾";
    meterLabel.innerText = "Half? Seriously?";
  } else if (val < 90) {
    catAvatar.innerText = "😻";
    meterLabel.innerText = "Aww, that's more like it!";
  } else {
    percentText.innerText = "1000%";
    catAvatar.innerText = "😻✨";
    meterLabel.innerText = "Correct answer!";
    nextBtn.classList.remove('hidden');
  }
});

function showPage(pageId) {
  const pages = document.querySelectorAll('.card');
  pages.forEach(page => page.classList.add('hidden'));

  document.getElementById(pageId).classList.remove('hidden');
}
