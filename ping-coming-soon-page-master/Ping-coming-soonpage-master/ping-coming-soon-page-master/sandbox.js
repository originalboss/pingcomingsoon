let btn = document.querySelector("#sub");
let mail = document.querySelector("input.mail");
let realemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;




function validateEmail(email){

    if( mail.value === "" || mail.value === undefined){
    
         let msg = document.querySelector("p");
         msg.innerText = "Please enter your email"; 
        //  msg.style.opacity = 1;
        //  msg.style.color = "red"; 
        //  msg.style.position = "relative"; 
        //  msg.style.textEmphasis;
        msg.classList.add("error");
        mail.classList.add("error");
        // mail.style.BorderColor = "red" ;    
    }
    else if(!email.value.match(realemail)){
        let msg = document.querySelector("p");
        msg.innerText = "Please enter a valid email"; 
        msg.classList.add("error");
        mail.classList.add("error"); 
   
    }

    else{

        let msg = document.querySelector("p");
        msg.innerText = "Thanks :)";
        msg.classList.add("success");
        mail.classList.add("success");

    }





    }



btn.addEventListener("click", (e) => {


e.preventDefault();

validateEmail(mail); 


});


