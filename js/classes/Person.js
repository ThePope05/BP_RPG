

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

    TakeDamage(points){
        let ans = [];
        for(let i = 0; i < points; i++){
            if(this.Armor <= 0){
                ans["Armor"] = "Depleted";
                if(this.Health < 0){
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
    }

    ChangeStamina(points){
        if(this.Stamina + points < 0){
            this.Stamina = 0;
        }
        else{
            this.Stamina += points;
        }
    }

    AddHealth(points){
        if(this.Health + points > 100){
            this.Health = 100;
        }
        else{
            this.Health += points;
        }
    }

    CalculateDamage(attackType){
        if(attackType == "Light"){
            return Math.floor(this.Level * 3);
        }
        else if(attackType == "Middle"){
            return Math.floor(this.Level * 6);
        }
        else if(attackType == "Heavy"){
            return Math.floor(this.Level * 10);
        }
    }
}