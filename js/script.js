let MyPlayer = new Person("Simon", 100, 100, 100, 5);
let EnemyBoss = new Person("Curwa", 250, 150, 100, 10);

console.log(MyPlayer);
console.log(EnemyBoss);

MyPlayer.TakeDamage(EnemyBoss.CalculateDamage("Light"));

console.log(MyPlayer);
console.log(EnemyBoss);