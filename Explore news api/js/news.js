const API_KEY = `236df787afe0434ebeee510763dfab3f`;
const loadNewsAPI = () => {
    const url = `https://newsapi.org/v2/everything?q=Apple&from=2023-01-31&sortBy=popularity&apiKey=${API_KEY}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayLoadedAPI(data.articles))
}

const displayLoadedAPI = values => {
    const displayNews = document.getElementById('display-news');
    displayNews.textContent = ``;
    values.forEach(value => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('card')
        newsDiv.innerHTML = `
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${value.urlToImage}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${value.title}</h5>
              <p class="card-text">${value.content}</p>
              <p class="card-text">${value.description}</p>
              <div class="d-flex gap-3">
                    <p class="card-text"><small class="text-muted">${value.author}</small></p>
                    <p class="card-text"><small class="text-muted">${value.publishedAt}</small></p>
              </div>
            </div>
          </div>
        </div>
        `;
        displayNews.appendChild(newsDiv);
    })
}
