const keyboardBox = document.querySelector('.keyboard-box');
const character = document.querySelector('.character');

document.addEventListener('keydown', (e) =>{
    if(!e.repeat){
        //keyboardBox.textContent = e.key;
    }
});

let positionD = 0;
let positionA = 0;
let positionW = 0;
let positionS = 0;

document.addEventListener('keydown', (e) =>{

    if(e.key === "d"){
        console.log(e.key);
        positionA = positionA + 6;
        character.style.left = positionA + "px";
        console.log(positionA);
    }

    if(e.key === "a"){
        console.log(e.key);
        positionA = positionA - 6;
        character.style.left = positionA + "px";
        console.log(positionA);
    }

    if(e.key === "w"){
        console.log(e.key);
        positionW = positionW - 6;
        character.style.top = positionW + "px";
        console.log(positionW);
    }

    if(e.key === "s"){
        console.log(e.key);
        positionW = positionW + 6;
        character.style.top = positionW + "px";
        console.log(positionW);
    }
});