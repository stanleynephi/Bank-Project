window.addEventListener("scroll",reveal);

// function to activate the code
function reveal(){
    let reveal = document.querySelectorAll(".reveal");

    for(var i=0; i< reveal.length; i++){
        let windowHeight = window.innerHeight;
        let revealtop = reveal[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if(revealtop < windowHeight - revealpoint){
            reveal[i].classList.add("active");
        }
        else{
            reveal[i].classList.remove("active");
        }
    }
}

function updateTime() {
    const timeElement = document.querySelector("#time");
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0" + hours : hours;

    // Format the time as HH:MM:SS
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // Set the innerHTML of the time element
    timeElement.innerHTML = formattedTime;
}

updateTime();

setInterval(updateTime,1000);

