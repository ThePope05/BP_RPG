
class Enemy extends Person{

    constructor(health, stamina, armor, level){
        super(GetRandomName(), health, stamina, armor, level);
    }

    async DoMove(){
        ShowHideEl("#loadingScreen", true, 100);
        await sleep(2000);
        if(this.Health <= (this.MaxHealth / 2) && this.RegenAmount > 0){
            this.ChangeHealth(Math.floor((this.MaxHealth - this.Health) / 2));
        }else{
        }
        if(this.Stamina >= (0 - (this.CalculateDamage("Middle") * 2))){
            MyPlayer.ChangeHealth(Math.floor(this.GetDamage("Middle")));
        }
        else{
            this.ChangeStamina(25);
        }
        ShowHideEl("#loadingScreen", false, -10);
    }
}