const items = [...document.querySelectorAll('.item')]
const all = document.querySelector('#all')

all.addEventListener('click', () => {
  items.forEach((item) => (item.checked = all.checked))
})

items.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.checked != true) all.checked = false

    let res = items.every((item) => item.checked)
    if (res) all.checked = true
  })
})
