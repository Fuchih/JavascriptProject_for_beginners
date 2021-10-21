function filter() {
  const input = document.querySelector('#input')
  const output = document.querySelector('#output')
  const badWords = ['fuck', 'shit', 'cunt', 'bitch', 'damn', 'asshole']

  badWords.forEach((el) => {
    const word = new RegExp(el, 'ig')
    input.value = input.value.replace(word, '*')
  })

  output.value = input.value
  input.value = ''
}
