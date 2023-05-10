
class Enemy extends Person{

    constructor(name, health, stamina, armor, level){

        super(name, health, stamina, armor, level);
    }

    async DoMove(){
        await sleep(3000);
        if(this.Health <= (this.Health / 2)){
            this.AddHealth(this.Health / 2);
        }else{
            MyPlayer.TakeDamage(this.CalculateDamage("Middle"));
        }
    }
}