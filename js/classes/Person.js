class Person{
    Name;
    Health;
    Stamina;
    Armor;
    Level;

    constructor(name, health, stamina, armor, level){
        this.Name = name;
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

    TakeStamina(points){
        if(this.Stamina + points > 100){
            this.Stamina = 100;
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
}