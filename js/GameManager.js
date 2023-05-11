const PlayerImg = document.querySelector("#Player > .body");
const EnemyImg = document.querySelector("#Enemy > .body");

let MyPlayer = new Person("Simon", 100, 100, 100, 5);

let CurEnemy = new Enemy(100, 100, 100, 5);

const LiAtButton = document.querySelector("#LightAttack").addEventListener('click', () => {
    CurEnemy.TakeDamage(MyPlayer.CalculateDamage("Light"));

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
