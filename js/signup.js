let form=document.querySelector(".signups");
form.addEventListener("submit",(e)=>{
e.preventDefault();

let firstName=document.querySelector("#firstName").value;
let lastName=document.querySelector("#lastName").value;
let email=document.querySelector("#email").value;
let password=document.querySelector("#password").value;
let confirmpassword=document.querySelector("#confirmpassword").value

const data={
    firstName,
    lastName,
    email,
    password,
    confirmpassword
};

const setPostman={
    method:"POST",
    Headers:{
        "Content-Type":"application/json",
    },
body:JSON.stringify(data),
};
fetch(`https://friendly-jay-uniform.cyclic.cloud/api/v1/user`,setPostman)
.then((Response)=>{
    return Response.json();
})
.then((data)=>{
    alert(data.message.token);
})
.catch((err)=>{
    alert(err);
});
 });
