const
    box = document.querySelector('.news__list'),
    newsBtn = document.querySelector('.show');
let p = 1,
    n = 0;

async function requestNews(page) {
    const response = await fetch(`http://newsapi.org/v2/everything?q=NASA&q=space&page=${page}&pageSize=8&apiKey=e2c0a1bf8ce54cf6bf7cf810989ea44b`);
    const news = await response.json();
    return news;
}
requestNews(p)
    .then(news => newsBlock(news))
    .catch(err => console.log('Error: ', err.message));

function newsBlock(data) {
    data.articles.forEach(article => {
        let newsItem = document.createElement('li');
        let newsImg = document.createElement('img');
        let newsTitle = document.createElement('h3');
        let newsLink = document.createElement('a');
        let frontSide = document.createElement('p');
        frontSide.classList.add('news__front');
        newsImg.setAttribute('src', article.urlToImage);
        newsLink.setAttribute('href', article.url);
        newsLink.setAttribute('target', 'blank');
        newsTitle.textContent = article.title;
        frontSide.textContent = `${article.description} By ${article.author}...`;
        newsItem.setAttribute('class', 'news__item');
        newsLink.appendChild(newsImg);
        newsItem.appendChild(newsTitle);
        newsItem.appendChild(newsLink);
        newsLink.appendChild(frontSide);
        box.appendChild(newsItem);
    })
};
newsBtn.addEventListener('click', () => {
    p++;
    n++;
    if (n == 3) {
        newsBtn.classList.add('back');
    }
    requestNews(p)
        .then(news => newsBlock(news))
        .catch(err => console.log('Error: ', err.message));
});