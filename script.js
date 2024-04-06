const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    
});


const isRequired = (value)=>{
    if(value === ""){
        return true
    }else{
        return false
    }
}

