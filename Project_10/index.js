const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
let timer = null
let num = 0
let speed = 10

start.addEventListener('click', () => {
  const box = document.querySelector('#box')
  const body = document.body

  if (timer === null) {
    timer = setInterval(() => {
      num += speed
      box.style.left = num + 'px'

      if (num >= body.offsetWidth - box.offsetWidth || num <= 0) speed = -speed
    }, 50)
  }
})

stop.addEventListener('click', () => {
  clearInterval(timer)
  timer = null
})
