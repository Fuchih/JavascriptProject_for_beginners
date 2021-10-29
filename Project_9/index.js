const seats = document.querySelectorAll('li')

seats.forEach((seat) => {
  seat.onclick = function () {
    const taken = this.getAttribute('class')

    if (!taken) {
      this.setAttribute('class', 'taken')
      this.innerText = '✘'
    } else {
      this.setAttribute('class', '')
      this.innerText = ''
    }
  }
})
