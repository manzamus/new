const addNewsForm = document.querySelector(".newsForm");

addNewsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newsMainTitle = document.querySelector("#newsMainTitle").value;
  const newsTitle = document.querySelector("#newsTitle").value;
  const newsSummaryDescription = document.querySelector("#newsSummaryDescription").value;
  const category = document.querySelector("#category").value;
  const newsDescription = document.querySelector("#newsDescription").value;
  const newsImage = document.querySelector("#newsImage").value;
  const publisher = document.querySelector("#publisher").value;
  const datas = {
    newsMainTitle,
    newsTitle,
    newsSummaryDescription,
    newsDescription,
    newsImage,
    category,
    newsMainTitle,
    publisher,
  };
  console.log(datas);

  const api = "https://plain-jewelry-pike.cyclic.app/api/v1/news";
  const setPostman = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token": token,
    },
    body: JSON.stringify(datas),
  };
  fetch(api, setPostman)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      alert(data.massage);
      window.location.href = "./index.html";
    })
    .catch((err) => {
      console.log(err);
    });
});