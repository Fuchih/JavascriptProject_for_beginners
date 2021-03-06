window.onload = function () {
  const randomCode = document.querySelector('.code')
  const change = document.querySelector('.change')
  const checkCode = document.querySelector('#checkCode')
  let res = getCode()

  randomCode.innerText = res
  change.onclick = function () {
    randomCode.innerText = getCode()
  }

  checkCode.onclick = function () {
    let code = randomCode.innerText
    let inputCode = document.querySelector('.inputCode').value

    if (code !== inputCode) {
      code = ''
      alert('Wrong')
    } else {
      alert('Correct')
    }
  }

  function getCode() {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let str = ''
    for (let i = 0; i < 6; i++) {
      let num = Math.floor(Math.random() * (36 - i) + i)
      str += arr[num]
    }
    return str
  }
}
