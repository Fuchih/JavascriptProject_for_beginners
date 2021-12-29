const start = document.querySelector('.start')
const prizes = document.querySelectorAll('.prize')

start.addEventListener('click', randomPrize)

function randomPrize() {
  start.classList.add('disabled') // start button disabled

  setTimeout(() => {
    clearInterval(timer)

    // enable start button
    start.classList.remove('disabled')
  }, 2500)

  let timer = setInterval(() => {
    // random number 0~7
    let randomNumber = Math.round(Math.random() * 7)

    // clear backgroundColor
    prizes.forEach((prize) => (prize.style.backgroundColor = ''))
    prizes[randomNumber].style.backgroundColor = 'pink'
  }, 60)
}
