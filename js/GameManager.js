const PlayerImg = document.querySelector("#Player > .body");
const EnemyImg = document.querySelector("#Enemy > .body");

let MyPlayer = new Person("Simon", 100, 100, 100, 5);

let CurEnemy = new Enemy(150, 200, 200, 6);

const LiAtButton = document.querySelector("#LightAttack").addEventListener('click', () => {
    CurEnemy.ChangeHealth(MyPlayer.CalculateDamage("Light"));

    ChangeMove();
});

const MiAtButton = document.querySelector("#MiddleAttack").addEventListener('click', () => {
    CurEnemy.ChangeHealth(MyPlayer.CalculateDamage("Middle"));

    ChangeMove();
});

const HeAtButton = document.querySelector("#HeavyAttack").addEventListener('click', () => {
    CurEnemy.ChangeHealth(MyPlayer.CalculateDamage("Heavy"));

    ChangeMove();
});

const HealButton = document.querySelector("#HealButton").addEventListener('click', () => {
    if(MyPlayer.RegenAmount > 0 && MyPlayer.Health < MyPlayer.MaxHealth){
        MyPlayer.ChangeHealth(MyPlayer.MaxHealth - MyPlayer.Health / 2);
    
        ChangeMove();
    }
});

const RestButton = document.querySelector("#RestButton").addEventListener('click', () => {
    MyPlayer.ChangeStamina(25);
    
    ChangeMove();
});