console.log('Hi')
const left = document.getElementById("value");
const used = document.getElementById("used")
const slider = document.getElementById("slider");


const fill = document.querySelector('.bar .fill')



slider.addEventListener('input', () => {
  fill.style.width = `${slider.value / 10}%`
  used.innerHTML = `${slider.value}GB `
  left.innerHTML = `${1000 - slider.value}<span class="small">GB Left</span> `;
  if (slider.value < 750) {
    left.style.color = "green"
  } else if (slider.value < 900) {
    left.style.color = "orange"
  } else {
    left.style.color = "red"
  }
  slider.style.backgroundImage = 'linear-gradient(90deg, hsl(6, 100%, 80%) 0%, hsl(335, 100%, 65%) 100%)';
});

