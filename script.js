let text = "{\n" +
    "  \"articles\": [\n" +
    "    {\n" +
    "      \"id\": 1,\n" +
    "      \"title\": \"New Study Reveals Surprising Health Benefits of Coffee\",\n" +
    "      \"date\": \"2024-10-15\",\n" +
    "      \"category\": \"Health\",\n" +
    "      \"content\": \"A new study published this week has found that drinking coffee may have numerous health benefits. The study, conducted over ten years, tracked the health outcomes of 10,000 participants who consumed coffee regularly...\",\n" +
    "      \"views\": 150,\n" +
    "      \"wordCount\": 500\n" +
    "    },\n" +
    "    {\n" +
    "      \"id\": 2,\n" +
    "      \"title\": \"Tech Giants Announce Collaboration on AI Safety Standards\",\n" +
    "      \"date\": \"2024-11-01\",\n" +
    "      \"category\": \"Technology\",\n" +
    "      \"content\": \"In a groundbreaking move, several major tech companies have come together to develop common standards for artificial intelligence safety. This collaboration aims to address ethical and security concerns around the rapid development of AI...\",\n" +
    "      \"views\": 300,\n" +
    "      \"wordCount\": 650\n" +
    "    },\n" +
    "    {\n" +
    "      \"id\": 3,\n" +
    "      \"title\": \"Local Art Fair Brings Creativity to the Community\",\n" +
    "      \"date\": \"2024-09-22\",\n" +
    "      \"category\": \"Arts\",\n" +
    "      \"content\": \"This year’s local art fair saw a record attendance as artists and creators gathered to display their works. From paintings to sculptures and everything in between, the fair offered a vibrant display of community creativity...\",\n" +
    "      \"views\": 85,\n" +
    "      \"wordCount\": 400\n" +
    "    },\n" +
    "    {\n" +
    "      \"id\": 4,\n" +
    "      \"title\": \"Experts Predict Economic Trends for 2025\",\n" +
    "      \"date\": \"2024-10-05\",\n" +
    "      \"category\": \"Finance\",\n" +
    "      \"content\": \"With 2025 on the horizon, financial experts have released their predictions for economic trends that may shape the upcoming year. Topics range from inflation rates and job markets to the potential impact of technological advancements...\",\n" +
    "      \"views\": 220,\n" +
    "      \"wordCount\": 700\n" +
    "    },\n" +
    "    {\n" +
    "      \"id\": 5,\n" +
    "      \"title\": \"Climate Change and the Future of Renewable Energy\",\n" +
    "      \"date\": \"2024-11-02\",\n" +
    "      \"category\": \"Environment\",\n" +
    "      \"content\": \"As climate change continues to be a pressing global issue, renewable energy sources are becoming increasingly important. Experts believe that the shift to renewable energy could not only mitigate environmental impacts but also drive economic growth...\",\n" +
    "      \"views\": 400,\n" +
    "      \"wordCount\": 800\n" +
    "    },\n" +
    "    {\n" +
    "      \"id\": 6,\n" +
    "      \"title\": \"Breakthroughs in Cancer Research Offer New Hope\",\n" +
    "      \"date\": \"2024-08-30\",\n" +
    "      \"category\": \"Health\",\n" +
    "      \"content\": \"Recent breakthroughs in cancer research have led to promising new treatments that may improve survival rates for several types of cancer. Researchers are optimistic about these advancements, though caution that more studies are needed...\",\n" +
    "      \"views\": 130,\n" +
    "      \"wordCount\": 550\n" +
    "    },\n" +
    "    {\n" +
    "      \"id\": 7,\n" +
    "      \"title\": \"Guide to Traveling on a Budget in 2025\",\n" +
    "      \"date\": \"2024-10-20\",\n" +
    "      \"category\": \"Travel\",\n" +
    "      \"content\": \"With travel becoming more accessible post-pandemic, many people are looking for ways to explore the world on a budget. From tips on finding affordable accommodations to advice on saving money on flights, this guide is perfect for travel enthusiasts...\",\n" +
    "      \"views\": 90,\n" +
    "      \"wordCount\": 450\n" +
    "    },\n" +
    "    {\n" +
    "      \"id\": 8,\n" +
    "      \"title\": \"The Rise of Electric Vehicles in the Automotive Industry\",\n" +
    "      \"date\": \"2024-09-15\",\n" +
    "      \"category\": \"Automotive\",\n" +
    "      \"content\": \"Electric vehicles are gaining popularity worldwide as consumers seek eco-friendly alternatives to traditional gasoline-powered cars. Automakers are racing to meet this demand by introducing a variety of new electric models to the market...\",\n" +
    "      \"views\": 250,\n" +
    "      \"wordCount\": 600\n" +
    "    },\n" +
    "    {\n" +
    "      \"id\": 9,\n" +
    "      \"title\": \"How Meditation Can Improve Mental Health\",\n" +
    "      \"date\": \"2024-11-04\",\n" +
    "      \"category\": \"Health\",\n" +
    "      \"content\": \"In a fast-paced world, meditation is increasingly recognized as a powerful tool for managing stress and improving mental health. Studies suggest that regular meditation can lead to reduced anxiety, better focus, and improved emotional regulation...\",\n" +
    "      \"views\": 175,\n" +
    "      \"wordCount\": 500\n" +
    "    },\n" +
    "    {\n" +
    "      \"id\": 10,\n" +
    "      \"title\": \"The Impact of Social Media on Modern Relationships\",\n" +
    "      \"date\": \"2024-10-12\",\n" +
    "      \"category\": \"Society\",\n" +
    "      \"content\": \"Social media has changed the way people connect, but what impact does it have on relationships? Experts say that while social media can strengthen bonds, it can also create misunderstandings and increase anxiety among users...\",\n" +
    "      \"views\": 205,\n" +
    "      \"wordCount\": 550\n" +
    "    }\n" +
    "  ]\n" +
    "}"

var articles = JSON.parse(text)
fetch('https://github.com/mynameis-spec/day/blob/main/articles.json')
.then(response => response.json())
.then(data => {
articles = data;
});
document.addEventListener('DOMContentLoaded', () => {
/*fetch('articles.json')
  .then(response => response.json())
  .then(data => {
    const articles = data.articles;
    displayArticles(articles);
    displayMostPopularArticle(articles);
  });
*/
    displayArticles(articles["articles"])
    displayMostPopularArticle(articles["articles"])

    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', toggleTheme);

    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-theme');
    }
  });

  function displayArticles(articlesArray) {
    const articleContainer = document.getElementById('article-container');
    articleContainer.innerHTML = '';

      for(let i = 0;i < articlesArray.length;i++) {
          const newArticle = document.createElement('div')
          newArticle.className = 'col-md-6'
          newArticle.innerHTML = `
        <div class="card p-3" id="${i}">
          <h5>${articlesArray[i].title}</h5>
          <p>Category: ${articlesArray[i].category} | Views: ${articlesArray[i].views}</p>
          <p>Published: ${new Date(articlesArray[i].date).toLocaleDateString()}</p>
          <p>Reading Time: ${Math.ceil(articlesArray[i].wordCount / 200)} mins</p>
          <button class="btn btn-custom col-md-3 col-sm-1" name="rd">Read</button>
        </div>
      `;
          newArticle.querySelector("button").onclick = () => {
              articles["articles"][i].views += 1
              displayArticle(articlesArray[i])
              displayMostPopularArticle(articlesArray)
          }

          articleContainer.appendChild(newArticle)
      }


  }

  function displayMostPopularArticle(articleArray) {
    const popularArticle = articleArray.reduce((prev, current) => (prev.views > current.views) ? prev : current);
    const popularArticleContainer = document.getElementById('most-popular-article');
    popularArticleContainer.innerHTML = `
      <h5>${popularArticle.title}</h5>
      <p>Category: ${popularArticle.category}</p>
      <p>Views: ${popularArticle.views}</p>
      <p>Reading Time: ${Math.ceil(popularArticle.wordCount / 200)} mins</p>
    `;
  }
  function displayArticle(article) {
      const articleContainer = document.getElementById('article-container');
      articleContainer.innerHTML = '';

      let shownArticle = document.createElement('div');
      shownArticle.innerHTML = `
        <div class="card p-3">
            
          <h5>${article.title}</h5>
          <p> ${article.content} </p>
          <button class="btn btn-custom col-md-2 col-sm-2" name="rd" onclick='displayArticles(articles["articles"]);
          displayMostPopularArticle(articles["articles"])'>Back</button>

        </div>
      `;
      articleContainer.appendChild(shownArticle)
  }

function sortArticles(criteria) {



      let sortedArticles = articles["articles"];
      if (criteria === 'views') {
          sortedArticles = sortedArticles.sort((a, b) => b.views - a.views);
      } else if (criteria === 'date') {
          sortedArticles = sortedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
      }
      displayArticles(sortedArticles);
  }

  function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');

        localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  
