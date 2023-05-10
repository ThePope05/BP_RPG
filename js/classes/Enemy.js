
class Enemy extends Person{

    constructor(name, health, stamina, armor, level){

        super(name, health, stamina, armor, level);
    }

    async DoMove(){
        await sleep(3000);
        if(this.Health <= (this.Health / 2)){
            this.ChangeHealth(this.Health / 2);
        }else{
            MyPlayer.ChangeHealth(this.CalculateDamage("Middle"));
        }
    }
}