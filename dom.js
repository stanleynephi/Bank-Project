const header = document.querySelector("h1");
header.innerHTML = "Car";

function time (){
    const time = new Date();
    document.querySelector("h1").innerHTML = time;
}

const button = document.querySelector("button");
button.addEventListener("click",time);

header.style.fontSize = "25px";