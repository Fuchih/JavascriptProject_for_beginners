document.onmousemove = (e) => {
  const box = document.querySelector('#box')
  box.style.top = e.clientY - box.clientHeight / 2 + 'px'
  box.style.left = e.clientX - box.clientWidth / 2 + 'px'
}
