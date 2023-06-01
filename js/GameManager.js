let MyPlayer = new Person("Simon", 50, 100, 25, 1);

let CurEnemy = new Enemy(30, 100, 20, 1);
let FirstEnemy = CurEnemy;

const LiAtButton = document.querySelector("#LightAttack").addEventListener('click', () => {
    CurEnemy.ChangeHealth(MyPlayer.GetDamage("Light"));

    ChangeMove();
});

const MiAtButton = document.querySelector("#MiddleAttack").addEventListener('click', () => {
    CurEnemy.ChangeHealth(MyPlayer.GetDamage("Middle"));

    ChangeMove();
});

const HeAtButton = document.querySelector("#HeavyAttack").addEventListener('click', () => {
    CurEnemy.ChangeHealth(MyPlayer.GetDamage("Heavy"));

    ChangeMove();
});

const HealButton = document.querySelector("#HealButton").addEventListener('click', () => {
    if(MyPlayer.RegenAmount > 0 && MyPlayer.Health < MyPlayer.MaxHealth){
        MyPlayer.ChangeHealth(Math.floor((MyPlayer.MaxHealth - MyPlayer.Health) / 2));
    
        ChangeMove();
    }
});

const RestButton = document.querySelector("#RestButton").addEventListener('click', () => {
    MyPlayer.ChangeStamina(25);
    
    ChangeMove();
});