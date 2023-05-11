let currentRound = 0;
let PlayerMove = false;

ChangeMove();

async function ChangeMove(){
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
    UpdateText();
}