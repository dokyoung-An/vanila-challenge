const loginForm = document.querySelector(".login");
const loginInput = loginForm.querySelector("input")
const button = loginForm.querySelector("button")



button.addEventListener("click",(event) => {
    event.preventDefault()
const name =document.querySelector(".box .name")
const value = loginInput.value;
   

   if(value === "") {
    alert("Please enroll your name?")
   } else if (value.length >10 ) {
    alert("please write short name")
   } else { 
    name.innerHTML =`${value}에게 전하는 말`
    }

   
   loginInput.value = " ";
   console.log(loginInput.value)
})