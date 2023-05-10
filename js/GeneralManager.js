function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function DisableButtons(state){
    const ActionButtons = document.querySelectorAll("#bottom button");
    ActionButtons.forEach((curBut) => {
        curBut.disabled = state;
    });
}

function SetSliderVal(selector, newVal){
    let slider = document.querySelector(selector);

    slider.style.width = newVal + "%";
}

function UpdateText(){
    const PlayerTi = document.querySelector("#Player > .title");
    PlayerTi.innerHTML = MyPlayer.Name + " Lvl-" + MyPlayer.Level;
    SetSliderVal("#Player #health", MyPlayer.Health);
    SetSliderVal("#Player #armor", MyPlayer.Armor);
    SetSliderVal("#Player #stamina", MyPlayer.Stamina);

    const EnemyTi = document.querySelector("#Enemy > .title");
    EnemyTi.innerHTML = CurEnemy.Name + " Lvl-" + CurEnemy.Level;
    SetSliderVal("#Enemy #health", MyPlayer.Health);
    SetSliderVal("#Enemy #armor", MyPlayer.Armor);
    SetSliderVal("#Enemy #stamina", MyPlayer.Stamina);
}