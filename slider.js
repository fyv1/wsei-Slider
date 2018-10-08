let position = 0;
let elem = document.querySelector("#slides");

function nextClick() {
    if (position > -1840){
        position -= 920;
        elem.style.transform = "translateX("+position+"px)";
    }
} 

function prevClick() {
    if (position < 0){
        position += 920;
        elem.style.transform = "translateX("+position+"px)";
    }
}
