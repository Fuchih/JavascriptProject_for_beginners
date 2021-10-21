/*
const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
  wordFilter()
})

function wordFilter() {
  const input = document.querySelector('#input')
  const output = document.querySelector('#output')
  const badWords = ['fuck', 'shit', 'cunt', 'bitch', 'damn', 'asshole']

  badWords.forEach((el) => {
    const regex = new RegExp(el, 'ig')
    input.value = input.value.replace(regex, '****')
  })

  output.value = input.value
  input.value = ''
}
*/

// ------------ same as above -----------
const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
  const input = document.querySelector('#input')

  wordFilter(input.value)
  input.value = ''
})

function wordFilter(inputValue) {
  const output = document.querySelector('#output')
  const badWords = ['fuck', 'shit', 'cunt', 'bitch', 'damn', 'asshole']
  const regex = new RegExp(badWords.join('|'), 'gi')

  output.value = inputValue.replace(regex, '****')
}
