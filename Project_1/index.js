const pay = document.getElementById('pay')

pay.onclick = function () {
  const response = window.confirm('Are you sure?')

  if(response) {
    location.href = './success/success.html'
  }
}
