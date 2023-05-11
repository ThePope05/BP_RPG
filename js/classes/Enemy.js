
class Enemy extends Person{

    constructor(health, stamina, armor, level){
        super(GetRandomName(), health, stamina, armor, level);
    }

    async DoMove(){
        await sleep(3000);
        if(this.Health <= (this.MaxHealth / 2) && this.RegenAmount > 0){
            this.ChangeHealth(this.MaxHealth - this.Health / 2);
        }else{
            MyPlayer.ChangeHealth(this.CalculateDamage("Middle"));
        }
    }
}