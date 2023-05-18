function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function SetSliderVal(selector, newVal){
    let slider = document.querySelector(selector);

    slider.style.width = newVal + "%";
}

function UpdateText(){
    const PlayerTi = document.querySelector("#Player > .title");
    PlayerTi.innerHTML = MyPlayer.Name + " Lvl-" + MyPlayer.Level;
    SetSliderVal("#Player #health", MyPlayer.Health / (MyPlayer.MaxHealth / 100));
    SetSliderVal("#Player #armor", MyPlayer.Armor / (MyPlayer.MaxArmor / 100));
    SetSliderVal("#Player #stamina", MyPlayer.Stamina / (MyPlayer.MaxStamina / 100));

    const EnemyTi = document.querySelector("#Enemy > .title");
    EnemyTi.innerHTML = CurEnemy.Name + " Lvl-" + CurEnemy.Level;
    SetSliderVal("#Enemy #health", CurEnemy.Health / (CurEnemy.MaxHealth / 100));
    SetSliderVal("#Enemy #armor", CurEnemy.Armor / (CurEnemy.MaxArmor / 100));
    SetSliderVal("#Enemy #stamina", CurEnemy.Stamina / (CurEnemy.MaxStamina / 100));

    console.log(CurEnemy.Armor + " " + CurEnemy.Health);
    console.log(MyPlayer.Armor + " " + MyPlayer.Health);
}
function ShowHideEl(selector){
    const element = document.querySelector(selector);

    if(element.style.opacity == 0){
        element.style.opacity = 1;
    }
    else{
        element.style.opacity = 0;
    }
}

function UpdateButton(){
    const LiAtButton = document.querySelector("#LightAttack");
    const MiAtButton = document.querySelector("#MiddleAttack");
    const HeAtButton = document.querySelector("#HeavyAttack");
    const RestButton = document.querySelector("#RestButton");
    const HealButton = document.querySelector("#HealButton");

    if(!PlayerMove || MyPlayer.Health == 0){
        LiAtButton.disabled = true;
        MiAtButton.disabled = true;
        HeAtButton.disabled = true;
        RestButton.disabled = true;
        HealButton.disabled = true;
    }else{
        LiAtButton.disabled = false;
        MiAtButton.disabled = false;
        HeAtButton.disabled = false;

        if(MyPlayer.Health < MyPlayer.MaxHealth && MyPlayer.RegenAmount > 0){
            HealButton.disabled = false;
        }else{
            HealButton.disabled = true;
        }

        if(MyPlayer.Stamina < 100){
            RestButton.disabled = false;
        }
        else{
            RestButton.disabled = true;
        }
    }
}