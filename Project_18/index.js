const url =
  'https://res.cloudinary.com/t19887348/raw/upload/v1641488541/ksd4ogv40sh4i9vcuu4z.json'

axios.get(url).then((response) => {
  const items = document.querySelector('.items')
  const btns = document.querySelector('.btn-container')
  const searchValue = document.querySelector('#search')
  const searchBtn = document.querySelector('#search-btn')
  const { data } = response

  render(data)

  btns.addEventListener('click', (e) => {
    const category = e.target.innerText.toLowerCase()
    const filterData = data.filter((item) => {
      if (category === 'all') return data
      return item.category === category
    })

    render(filterData)
  })

  let keyword = ''

  searchValue.addEventListener('keyup', (e) => {
    keyword = e.target.value.toLowerCase().trim()
  })

  searchBtn.addEventListener('click', () => {
    const searchData = data.filter((item) => {
      if (item.name.includes(keyword)) return item
    })

    render(searchData)
    searchValue.value = ''
  })

  function render(data) {
    items.innerHTML = data
      .map((item) => {
        const { name, image, price } = item

        return `
          <div class="item">
            <img src="${image}" alt="${name}" />
            <span class="title">${name}</span>
            <span>$${price}</span>
          </div>
        `
      })
      .join('')
  }
})
