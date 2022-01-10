const printer = document.querySelector('#printer')
const laptop = document.querySelector('#laptop')
const phone = document.querySelector('#phone')
const total = document.querySelector('.total')
const all = document.querySelector('.all')

all.addEventListener('change', checkAll)
laptop.addEventListener('click', addItem)
phone.addEventListener('click', addItem)
printer.addEventListener('click', addItem)

let nameList = []

function addItem(e) {
  const tbody = document.querySelector('tbody')
  const item = e.target.parentNode
  const itemInfo = item.querySelectorAll('span')
  const title = itemInfo[0].innerText
  const price = itemInfo[1].innerText.substr(1)

  const flag = nameList.find((name) => name === title)

  if (!flag) {
    nameList = [title, ...nameList]

    tbody.innerHTML += `
    <tr id="${title}">
      <td>
        <input
          type="checkbox"
          id="${Date.now()}"
          class="checkbox"
          onchange="checkSpecificCheckbox(this)"
        />
      </td>
      <td><label for="${Date.now()}">${title}</label></td>
      <td class="price">$${price}</td>
      <td>
        <button onclick="increase(this)" id="increase">+</button>
        <p class="amount">1</p>
        <button onclick="decrease(this)">-</button>
      </td>
      <td class="subtotal">$${price}</td>
      <td><button onclick="deleteItem(this)">delete</button></td>
    </tr>
    `
  } else {
    const currentTr = tbody.querySelector(`#${title}`)
    const current = currentTr.querySelector('#increase')
    increase(current)
  }
}

function checkAll() {
  const tbody = document.querySelector('tbody')
  if (!tbody.children.length) {
    all.checked = false
    return
  }

  const checkboxes = tbody.querySelectorAll('tr input')
  checkboxes.forEach((checkbox) => (checkbox.checked = all.checked))

  calculateTotal(tbody)
}

function checkSpecificCheckbox(current) {
  const tbody = document.querySelector('tbody')
  const checkboxes = [...tbody.querySelectorAll('tr input')]

  checkboxes.forEach((checkbox) => {
    if (!checkbox.checked) all.checked = false
    let state = checkboxes.every((checkbox) => checkbox.checked)
    if (state) all.checked = true
  })

  calculateTotal(tbody)
}

function increase(current) {
  const currentTr = current.parentNode
  let amount = currentTr.querySelector('p')

  amount.innerText = Number(amount.innerText) + 1
  calculateSubtotal(current)

  const currentTbody = current.parentNode.parentNode.parentNode
  calculateTotal(currentTbody)
}

function decrease(current) {
  const currentTr = current.parentNode
  let amount = currentTr.querySelector('p')

  if (amount.innerText == 1) {
    deleteItem(current)
    return
  }
  amount.innerText = Number(amount.innerText) - 1

  calculateSubtotal(current)

  const currentTbody = current.parentNode.parentNode.parentNode
  calculateTotal(currentTbody)
}

function deleteItem(current) {
  const currentTr = current.parentNode.parentNode
  const tbody = currentTr.parentNode

  tbody.removeChild(currentTr)
  calculateTotal(tbody)
  checkAll()

  nameList = nameList.filter((name) => name !== currentTr.getAttribute('id'))
}

function calculateSubtotal(current) {
  const currentTr = current.parentNode.parentNode
  const price = currentTr.querySelector('.price')
  const amount = currentTr.querySelector('.amount')
  const subtotal = currentTr.querySelector('.subtotal')

  let sum = 0
  sum = (Number(price.innerText.substr(1)) * Number(amount.innerText)).toFixed(
    2
  )
  subtotal.innerText = sum
}

function calculateTotal(currentTbody) {
  prices = currentTbody.querySelectorAll('.subtotal')

  let totalPrice = 0
  prices.forEach((price) => {
    if (price.parentNode.querySelector('.checkbox').checked)
      totalPrice += Number(price.innerText.replace('$', ''))
  })

  total.innerText = totalPrice.toFixed(2)
}
