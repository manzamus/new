const newsTable = document.querySelector(".getAllNews");

const spinner = document.querySelector(".spinner");

spinner.style.display = "block";
newsTable.style.display = "none";
addNewsForm.style.display = "none";

fetch("https://plain-jewelry-pike.cyclic.app/api/v1/news")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log(data);
    data.data.map((newx, index) => {
      spinner.style.display = "none";
      newsTable.style.display = "block";
      newsTable.innerHTML += `
     <tr>
     <td>${index + 1}</td>
     <td>${newx.newsMainTitle}</td>
     <td>${newx.newsTitle}</td>
     <td>${newx.newsSummaryDescription}</td>
     <td>${newx.publisher}</td>
     <td><button class="delete" id=${
       newx._id
     } style="color:green;font-size:16px;padding:8px">delete</button></td>
     <td><button class="delete" style="color:red;font-size:16px;padding:8px">Delete</button></td>
     </tr>
     `;
    });
    const deleteSelect = document.querySelectorAll(".delete");
    for (let i = 0; i < deleteSelect.length; i++) {
      deleteSelect[i].onclick = function () {
        addNewsForm.style.display = "block";
        let tr = this.parentElement.parentElement;
        let td = tr.getElementsByTagName("td");
        let id = deleteSelect[i].getAttribute("id");
        newsMainTitle.value = td[1].innerHTML;
        newsTitle.value = td[2].innerHTML;
        newsSummaryDescription.value = td[3].innerHTML;
        publisher.value = td[4].innerHTML;
        addNewsForm.addEventListener("submit", () => {
          const datas = {
            newsMainTitle: newsMainTitle.value,
            newsTitle: newsTitle.value,
            newsSummaryDescription: newsSummaryDescription.value,
            publisher: publisher.value,
          };
          console.log(token);
          fetch(`https://plain-jewelry-pike.cyclic.app/api/v1/news/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                "auth-token": token,
              },
              body: JSON.stringify(datas),
            }
          )
            .then((resp) => {
              return resp.json();
            })
            .then((data) => {
              alert(data.message);
            });
        });
      };
    }
  });