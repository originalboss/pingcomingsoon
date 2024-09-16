let btn = document.querySelector("button");


btn.addEventListener("click", NM);


function NM(){
    let box = document.querySelector('input');
    box.style.borderColor = "red";
    let msg = document.querySelector("p");
    msg.style.opacity = 1;
    msg.style.position  = "relative";
    msg.style.color = "red";
    msg.style.fontSize = "15px";
    
    
}