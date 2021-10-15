window.onload = function () {
  let counter = 5
  setInterval(function () {
    counter--
    document.getElementById('text').innerText = 'Go back at ' + counter + ' sec'
    if (counter === 0) {
      location.href = '../index.html'
    }
  }, 1000)
}

const back = document.getElementById('back')

back.onclick = function () {
  location.href = '../index.html'
}
