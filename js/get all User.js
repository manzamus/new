const token = window.localStorage.getItem("token");
const table = document.querySelector(".tableusers");
// table.style.display = "none";
fetch("https://plain-jewelry-pike.cyclic.app/api/v1/user", {
  headers: {
    "auth-token": token,
  },
})
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    data.data.map((user,index) => {
      table.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        </tr>
        `;
    });
  });