const originBox = document.querySelector('.origin-box')
const zoomRiver = document.querySelector('.zoom-river')
const magnifier = document.querySelector('.magnifier')
const zoomBox = document.querySelector('.zoom-box')

originBox.addEventListener('mousemove', (e) => {
  zoomBox.style.display = 'block'
  magnifier.style.top = e.clientY - magnifier.clientHeight / 2 + 'px'
  magnifier.style.left = e.clientX - magnifier.clientWidth / 2 + 'px'
  zoomRiver.style.top = -(e.clientY - magnifier.clientHeight / 2) * 10 + 'px'
  zoomRiver.style.left = -(e.clientX - magnifier.clientWidth / 2) * 10 + 'px'
})

originBox.addEventListener('mouseout', (e) => {
  zoomBox.style.display = 'none'
})
