const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
  timer()
})

function timer() {
  const loading = document.querySelector('#loading')
  const percent = document.querySelector('span')
  let timer = null
  let num = 0

  if (timer === null) {
    timer = setInterval(() => {
      num++
      loading.style.width = num + '%'
      percent.innerText = num + '%'

      if (num === 100) clearInterval(timer)
    }, 30)
  }
}
