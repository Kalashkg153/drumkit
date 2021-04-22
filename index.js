var i=0;
for(i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click", clicksound);
}
 document.addEventListener("keypress",keysound);

function clicksound()
{
    handle(this.innerHTML);
}
function keysound(event)
{
    handle(event.key);
}


function handle(key)
{
    switch(key)
    {
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "h":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "g":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    }
}