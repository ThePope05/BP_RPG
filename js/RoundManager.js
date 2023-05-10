let currentRound = 0;
let PlayerMove = false;

ChangeMove();

async function ChangeMove(){
    UpdateText();
    if(!PlayerMove){
        PlayerMove = true;
        DisableButtons(false);
    }
    else{
        PlayerMove = false;
        DisableButtons(true);
        await CurEnemy.DoMove();
        ChangeMove();
    }
}