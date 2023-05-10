const ActionButtons = document.querySelectorAll("#bottom button");

let currentRound = 0;
let PlayerMove = true;

//Player does attack
//Move -> Enemy
//Enemy does heal
//Move -> Player
//Player does attack
//Enemy dies - Player wins
//Round + 1

function ChangeMove(){
    UpdateText();
    if(!PlayerMove){
        ActionButtons.forEach((curBut) => {
            curBut.disabled = true;
        });
    }
    else{
        ActionButtons.forEach((curBut) => {
            curBut.disabled = false;
        });
    }
}