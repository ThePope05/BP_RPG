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
            ShowHideEl("#winScreen");
        }
        else{
            ShowHideEl("#loseScreen");
        }
    }
}