

class Person{
    Name;
    Health;
    Stamina;
    Armor;
    Level;

    constructor(name = null, health, stamina, armor, level){
        if(name == null){
            this.Name = GetRandomName();
        }else{
            this.Name = name;
        }
        this.Health = health;
        this.Stamina = stamina;
        this.Armor = armor;
        this.Level = level;
    }

    ChangeHealth(points){
        if(points < 0){
            let ans = [];
            for(let i = 0; i < points; i++){
                if(this.Armor <= 0){
                    ans["Armor"] = "Depleted";
                    if(this.Health <= 0){
                        ans["Health"] = "Depleted";
                    }
                    else{
                        this.Health -= 1;
                    }
                }
                else{
                    this.Armor -= 1;
                }
            }
        }else{
            if(this.Health + points > 100){
                this.Health = 100;
            }
            else{
                this.Health += points;
            }
        }
    }

    ChangeStamina(points){
        if(this.Stamina + points < 0){
            this.Stamina = 0;
        }
        else{
            this.Stamina += points;
        }
    }

    CalculateDamage(attackType){
        if(attackType == "Light"){
            return 0 - Math.floor(this.Level * 3);
        }
        else if(attackType == "Middle"){
            return 0 - Math.floor(this.Level * 6);
        }
        else if(attackType == "Heavy"){
            return 0 - Math.floor(this.Level * 10);
        }
    }
}