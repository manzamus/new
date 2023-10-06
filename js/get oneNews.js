const singleNewsContainer = document.querySelector(".singleNewsContainer");

const idParams = window.location.href.split("?id=")[1];
const spinner = document.querySelector(".spinner");
spinner.style.display = "block";
singleNewsContainer.style.display = "none";
fetch(`https://friendly-jay-uniform.cyclic.cloud/api/v1/news${idParams}`)
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    spinner.style.display = "none";
    singleNewsContainer.style.display = "block";
    singleNewsContainer.innerHTML = `
    <div class="single-main">
    <div class="img-single">
    <img src="${data.data.newsImage[0]}"/>
    <h5 class="postedDate">${data.data.postedAt}</h5>
    </div>
   
    <div class="text">
    <h3 class="singleheading">${data.data.newsMainTitle}</h3>
    <p class="short-descript">${data.data.newsSummaryDescription}</p>
    </div>
    
    </div>
    <div class="conts">
    <h4>${data.data.newsTitle}</h4>
    </div>
    
    `;
    console.log(data.data.newsSummaryDescription);
  });