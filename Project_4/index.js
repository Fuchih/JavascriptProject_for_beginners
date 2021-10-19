const tabs = document.querySelectorAll('.tab')
const contents = document.querySelectorAll('.content')

tabs.forEach((tab, index) => {
  tab.onclick = () => {
    tabs.forEach((tab, index) => {
      tab.classList.remove('active')
      contents[index].classList.remove('show')
    })

    tab.classList.add('active')
    contents[index].classList.add('show')
  }
})

/* ---same as above
for (let i = 0; i < tabs.length; i++) {
  tabs[i].onclick = function () {
    for (let j = 0; j < tabs.length; j++) {
      tabs[j].classList.remove('active')
      contents[j].classList.remove('show')
    }

    tabs[i].classList.add('active')
    contents[i].classList.add('show')
  }
}
*/
