

class Person{
    Name;
    Health;
    MaxHealth;
    RegenAmount;
    Stamina;
    MaxStamina;
    Armor;
    MaxArmor;
    Level;

    constructor(name = null, health, stamina, armor, level){
        this.Name = name;
        this.MaxHealth = health;
        this.Health = this.MaxHealth;
        this.RegenAmount = 2;
        this.MaxStamina = stamina;
        this.Stamina = this.MaxStamina;
        this.MaxArmor = armor;
        this.Armor = this.MaxArmor;
        this.Level = level;
    }

    ChangeHealth(points){
        if(points < 0){
            let ans = [];
            for(let i = 0; i > points; i--){
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
            this.RegenAmount--;
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
        let randomDam = 0;
        if(attackType == "Light"){
            if(Math.random() < .5){
                randomDam = 0 - Math.floor(Math.random() * 10)
            }
            else{
                randomDam = Math.floor(Math.random() * 10);
            }
            return 0 - (Math.floor(this.Level * 3) + randomDam);
        }
        else if(attackType == "Middle"){
            if(Math.random() < .5){
                randomDam = 0 - Math.floor(Math.random() * 10)
            }
            else{
                randomDam = Math.floor(Math.random() * 10);
            }
            return 0 - (Math.floor(this.Level * 6) + randomDam);
        }
        else if(attackType == "Heavy"){
            if(Math.random() < .5){
                randomDam = 0 - Math.floor(Math.random() * 10)
            }
            else{
                randomDam = Math.floor(Math.random() * 10);
            }
            return 0 - (Math.floor(this.Level * 10) + randomDam);
        }
    }
}