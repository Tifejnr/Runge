let buttonEl = document.querySelector(".buutton-el");
let sideBar = document.querySelector(".side-bar")
let passwordEl = document.querySelector(".password-el");
let password = []
let passwordHide = document.querySelector(".hide-am")
let errorPass = document.querySelector(".error-eli");
let localStorageErrorMade = JSON.parse(localStorage.getItem("errorMade"));

if (localStorageErrorMade){
    errorPass.innerHTML = localStorageErrorMade
}

buttonEl.addEventListener("click", function(){
    passwordCheck()


    

    if (password == "1" ) {
        sideBar.classList.add('show-side-bar')

        console.log("win")

        passwordHide.classList.add('hide-password')
       
    }

    else{
        console.log(" WRong Password")
        errorMade = "Wrong Password. Retry "
        errorPass.innerHTML = " Wrong Password. Retry"
         errorPass.classList.add('error-eli1')

        localStorage.setItem("errorMade", JSON.stringify(errorMade))
        window.location.reload();
        window.location.reload();
        return  false;
        
    }

    
})

function passwordCheck (){
    password.push([passwordEl.value])

for(let i =0; i<password.length; i++){
    password = password[i]
    console.log(password)
}


}
