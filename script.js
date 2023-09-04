document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '2e77e4dfdc304fc3b65f7c0c9a2ebabe'; // Replace with your News API key
    const newsContainer = document.getElementById('news');

    // Fetch climate change news using the News API
    fetch(`https://newsapi.org/v2/everything?q=climate%20change&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                // Display news articles
                data.articles.forEach(article => {
                    const newsCard = document.createElement('div');
                    newsCard.classList.add('news-card');

                    const title = document.createElement('h2');
                    title.classList.add('news-title');
                    title.textContent = article.title;

                    const description = document.createElement('p');
                    description.classList.add('news-description');
                    description.textContent = article.description;

                    newsCard.appendChild(title);
                    newsCard.appendChild(description);
                    newsContainer.appendChild(newsCard);
                });
            } else {
                console.error('Error fetching news data.');
            }
        })
        .catch(error => console.error('Error:', error));
});

