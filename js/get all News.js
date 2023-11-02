const newsIndex = document.querySelector(".news");
const spinner = document.querySelector(".spinner");
spinner.style.display = "block";
// newsIndex.style.display = "none";

fetch("https://plain-jewelry-pike.cyclic.app/api/v1/news")
  .then((response) => {
    return response.json();
  })

  .then((data) => {
    data.data.map((news) => {
      spinner.style.display = "none";
      newsIndex.style.display = "grid";
      newsIndex.innerHTML += `
      <div class="card">
      <img src="${news.newsImage[0]}"/>
      <div class="text">
      <p class="date">${news.postedAt}</p>
        <h4>${news.newsMainTitle}</h4>
        <p class="description">${news.newsSummaryDescription}</p>
        <div class="butt">
              <a href="./singleNews.html?id=${news._id}" class="readmore">Readmore....</a>
            </div>
        </div>
        
        </div>
        `;
    });
  });




