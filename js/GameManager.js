const PlayerTi = document.querySelector("#Player > .title");
const PlayerHp = document.querySelector("#Player > .health");
const PlayerAr = document.querySelector("#Player > .armor");
const PlayerSt = document.querySelector("#Player > .stamina");
const PlayerImg = document.querySelector("#Player > .body");

const EnemyTi = document.querySelector("#Enemy > .title");
const EnemyHp = document.querySelector("#Enemy > .health");
const EnemyAr = document.querySelector("#Enemy > .armor");
const EnemySt = document.querySelector("#Enemy > .stamina");
const EnemyImg = document.querySelector("#Enemy > .body");

let MyPlayer = new Person("Simon", 100, 100, 100, 5);

let CurEnemy = new Person(null, 100, 100, 100, 5);

function UpdateText(){
    PlayerTi.innerHTML = MyPlayer.Name + " Lvl" + MyPlayer.Level;
    PlayerHp.innerHTML = "Health: " + MyPlayer.Health;
    PlayerAr.innerHTML = "Armor: " + MyPlayer.Armor;
    PlayerSt.innerHTML = "Stamina: " + MyPlayer.Stamina;

    EnemyTi.innerHTML = CurEnemy.Name + " Lvl" + CurEnemy.Level;
    EnemyHp.innerHTML = "Health: " + CurEnemy.Health;
    EnemyAr.innerHTML = "Armor: " + CurEnemy.Armor;
    EnemySt.innerHTML = "Stamina: " + CurEnemy.Stamina;
}