const form = document.querySelector(".logins");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  const data = {
    email,
    password,
  };
  const setPostman = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(`https://plain-jewelry-pike.cyclic.app/api/v1/user/login`,
    setPostman
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data)
      if (data.token) {
        const token = data.token;
        localStorage.setItem("token", token);
        if (data.data.role=="admin") {
          window.location.href = "./admin.html";
        } else {
          window.location.href = "./index.html";
        }
      } else {
        alert(data.message);
      }
    })
    .catch((err) => {
      alert(err);
    });
});