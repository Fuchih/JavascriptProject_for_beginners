const search = document.querySelector('#search')
const showList = document.querySelector('#show')

const list = [
  'Restart My Life/Heart',
  'Elegantly Wasted',
  'Echoes',
  'The Only End',
  'Hate Burns',
  'Start Again',
  'Echoes in the Darkness',
  'Stop and take a second',
  'In the way of Life And Death',
  'Fools in geniuses',
  'Lost In Battle',
  'Please don',
  'The shell of what I was',
  'Corrupted Lies',
  'Fighting back',
  'Real-life Fairytale',
  'Dark alarms',
  'Running from me',
  'Perfectly fake',
  'Off the map'
]// or you can use ajax to get data

search.onkeyup = function () {
  showList.style.display = 'block'
  let str = ''

  list.forEach((item) => {
    let res = item.indexOf(search.value.trim())
    const reg = /\s\S+|S+\s|\S/

    if (res != -1 && reg.test(search.value)) {
      str += `<p>${item}</p>`
    }
  })

  /* ----same as above

  for (let i = 0; i < list.length; i++) {
    //  Regular Expression ↓↓↓
    const reg = /\s\S+|S+\s|\S/
    let res = list[i].indexOf(search.value.trim())

    if (res != -1 && reg.test(search.value)) {
      str += '<p>' + list[i] + '</p>'
    }
  }

  */

  if (!search.value || !str) {
    showList.innerHTML = 'Nothing matching...'
  } else {
    showList.innerHTML = str
  }
}

search.onblur = function () {
  showList.style.display = 'none'
  this.value = ''
}
