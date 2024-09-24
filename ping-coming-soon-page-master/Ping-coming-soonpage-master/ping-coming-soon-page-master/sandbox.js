let btn = document.querySelector("#sub");
let mail = document.querySelector("input.mail");





function validateEmail(){

    if( mail.value === "" || mail.value === undefined){
    
         let msg = document.querySelector("p");
         msg.innerText = "Please enter your email"; 
         msg.style.opacity = 1;
         msg.style.color = "red"; 
         msg.style.position = "relative"; 
         msg.style.textEmphasis;
        

        // msg.classList.add("error");
        // mail.style.BorderColor = "red" ;    
    }
}



btn.addEventListener("click", (e) => {


e.preventDefault();

validateEmail(mail); 


});


