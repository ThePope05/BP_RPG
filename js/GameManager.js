const PlayerTi = document.querySelector("#Player > .title");
const PlayerImg = document.querySelector("#Player > .body");

const EnemyTi = document.querySelector("#Enemy > .title");
const EnemyImg = document.querySelector("#Enemy > .body");

let MyPlayer = new Person("Simon", 100, 100, 100, 5);

let CurEnemy = new Enemy(null, 100, 100, 100, 5);

function UpdateText(){
    PlayerTi.innerHTML = MyPlayer.Name + " Lvl-" + MyPlayer.Level;
    SetSliderVal("#Player #health", MyPlayer.Health);
    SetSliderVal("#Player #armor", MyPlayer.Armor);
    SetSliderVal("#Player #stamina", MyPlayer.Stamina);

    EnemyTi.innerHTML = CurEnemy.Name + " Lvl-" + CurEnemy.Level;
    SetSliderVal("#Enemy #health", MyPlayer.Health);
    SetSliderVal("#Enemy #armor", MyPlayer.Armor);
    SetSliderVal("#Enemy #stamina", MyPlayer.Stamina);
}