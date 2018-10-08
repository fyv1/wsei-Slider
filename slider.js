let position = 0;
let elem = document.querySelector("#slides");

// CONFIG VARS
let imgWidth = 920;
let amount = 3;


function nextClick() {
    if (position > -1 * imgWidth*(amount-1)){
        position -= imgWidth;
        elem.style.transform = "translateX("+position+"px)";
        
        }
} 

function prevClick() {
    if (position < 0){
        position += imgWidth;
        elem.style.transform = "translateX("+position+"px)";
    }
}
//TODO: at the end of 'queue' return to 1st/last img
