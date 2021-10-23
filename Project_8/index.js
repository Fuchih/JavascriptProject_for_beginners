window.onscroll = () => {
  const goTop = document.querySelector('.top')
  let res = this.pageYOffset

  if (res >= 270) {
    goTop.style.position = 'fixed'
    goTop.style.top = 130 + 'px'
  } else {
    goTop.style.position = 'absolute'
    goTop.style.top = 400 + 'px'
  }

  goTop.addEventListener('click', () => {
    animate(window, 0) // scroll back to top animation

    /*  ---- in case you don't need animation
    document.documentElement.scrollTop = 0
    */
  })
}

function animate(obj, target) {
  clearInterval(obj.timer)

  obj.timer = setInterval(() => {
    let step = (target - window.pageYOffset) / 10
    step = step > 0 ? Math.ceil(step) : Math.floor(step)

    if (window.pageYOffset === target) {
      clearInterval(obj.timer)
    }

    window.scroll(0, window.pageYOffset + step)
  }, 15)
}
