const url = 'https://newsapi.org/v2/top-headlines?' +
            'country=tw&' +
            'pageSize=50&'+
            'apiKey={{YourApiKey}}'

getNews()

document.querySelector('button').addEventListener('click', () => getNews())

function getNews() {
  const ul = document.querySelector('ul')
  ul.innerHTML = ``

  axios.get(url).then((res) => {
    let data = res.data.articles
    let randomData = data.sort(() => 0.5-Math.random()).slice(0, 10)

    randomData.forEach((news) => {
      ul.innerHTML += `
        <li>
          <a href="${news.url}">${news.title}</a>
          <img src="${news.urlToImage}" alt="${news.description}">
          <span>${news.publishedAt.substring(0,10)}</span>
        </li>
      `
    })
  })
}
