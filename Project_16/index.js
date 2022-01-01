const pics = document.querySelector('.pics')
const picsWidth = pics.getBoundingClientRect().width // Get slider's width

let num = 0

setInterval(() => {
  num++

  pics.style.transition = `all 1s`
  pics.style.transform = `translate(${num * -picsWidth}px, 0)`

  // Return to first slider
  if (num === pics.children.length) {
    // Seamless connection
    pics.style.transition = `none`
    pics.style.transform = `translate(0, 0)`

    num = 0
  }
}, 1000)
