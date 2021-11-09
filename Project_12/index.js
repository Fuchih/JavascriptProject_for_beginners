let outputData = []

btn.onclick = () => {
  const userName = document.querySelector('.user-name')
  const userAge = document.querySelector('.user-age')
  const userGender = document.querySelector('#user-gender')
  const userPhone = document.querySelector('.user-phone')

  const inputData = [
    {
      name: userName.value.trim(),
      age: userAge.value.trim(),
      gender: userGender.value,
      phone: userPhone.value.trim()
    }
  ]

  outputData = [...inputData, ...outputData]

  addData()

  userName.value = ''
  userAge.value = ''
  userPhone.value = ''
}

function addData() {
  tr = ''
  outputData.forEach((item, index) => {
    tr += `
            <tr>
              <td>${item.name}</td>
              <td>${item.age}</td>
              <td>${item.gender}</td>
              <td>${item.phone}</td>
              <td onclick="deleteData(${index})" class="delete">Delete</td>
            </tr>
          `
  })

  const tbody = document.querySelector('tbody')
  tbody.innerHTML = tr
}

function deleteData(index) {
  outputData = outputData.filter((_, i) => i !== index)
  addData()
}
