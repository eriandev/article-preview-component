'use strict'
const button = document.getElementById('button-share')
const toltip = document.getElementById('toltip-share')

button.addEventListener('click', () => {
  button.classList.toggle('active')
  toltip.classList.toggle('invisible')
})
