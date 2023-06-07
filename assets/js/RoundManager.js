let currentRound = 0;
let PlayerMove = false;

ChangeMove();

async function ChangeMove(){
    UpdateText();
    if(MyPlayer.Health > 0 && CurEnemy.Health > 0){
        if(!PlayerMove){
            PlayerMove = true;
            UpdateButton();
        }
        else{
            PlayerMove = false;
            UpdateButton();
            await CurEnemy.DoMove();
            ChangeMove();
        }
    }else{
        if(PlayerMove){
            ShowHideEl("#levelScreen", true, 10);
            const Enemy = document.querySelector("#Enemy");
            Enemy.classList.add("Dead");
        }
        else{
            ShowHideEl("#loseScreen", true, 100);
            const Player = document.querySelector("#Player");
            Player.classList.add("Dead");
        }
    }
}