const quotes=[
    "You are the Best!",
    "Never give up!",
    "Believe in yourself!",
    "Stay positive, work hard, make it happen!"


]


function generator(){
    const randomIndex=Math.floor(Math.random()*quotes.length);
    document.getElementById("quote").innerHTML=quotes[randomIndex];

}

function toggle(){

    document.body.classList.toggle("dark-mode");
    
}
function themeText(){
    const themeButton=document.getElementById("toggler");
    if(document.body.classList.contains("dark-mode")){
        themeButton.innerText="Dark";
    }
    else{
        themeButton.innerText="Light";
    }

}
