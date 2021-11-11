/* const xml = new XMLHttpRequest()
xml.open('GET', './db.json')
xml.send()
xml.onreadystatechange = () => {
  if (xml.status === 200 && xml.readyState === 4) {
    const res = JSON.parse(xml.responseText).data
    let li1 = ``

    res.forEach((first) => {
      let li2 = ``

      first.content.forEach((second) => {
        let li3 = ``

        second.content.forEach((third) => {
          li3 += `
            <li class="nav-item3">
              <a href="#">${third}</a>
            </li>
          `
        })

        li2 += `
          <li class="nav-item2">
            <a href="#">${second.title}</a>
            <ul id="nav3">
              ${li3}
             </ul>
          </li>
        `
      })

      li1 += `
        <li class="nav-item1">
          <a href="#">${first.title}</a>
          <ul id="nav2">
            ${li2}
          </ul>
        </li>
      `
    })

    document.querySelector('#nav1').innerHTML = li1
  }
} */

async function getData() {
  const response = await axios.get('./db.json')
  return response.data.data
}

getData().then((res) => {
  li1 = ``
  
  res.forEach((first) => {
    let li2 = ``

    first.content.forEach((second) => {
      let li3 = ``

      second.content.forEach((third) => {
        li3 += `
          <li class="nav-item3">
            <a href="#">${third}</a>
          </li>
        `
      })

      li2 += `
        <li class="nav-item2">
          <a href="#">${second.title}</a>
          <ul id="nav3">
            ${li3}
           </ul>
        </li>
      `
    })

    li1 += `
      <li class="nav-item1">
        <a href="#">${first.title}</a>
        <ul id="nav2">
          ${li2}
        </ul>
      </li>
    `
  })

  document.querySelector('#nav1').innerHTML = li1
})
