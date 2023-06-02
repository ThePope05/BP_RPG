

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
            ConsoleAddMessage(this.Name + " Was damaged: " + points + " points");
            let ans = [];
            for(let i = 0; i > points; i--){
                if(this.Armor <= 0){
                    if(this.Health <= 0){
                    }
                    else{
                        this.Health -= 1;
                    }
                }
                else{
                    this.Armor -= 1;
                }
            }
            if(this.Health <= 0){
                ConsoleAddMessage(this.Name + " Died");
                ConsoleAddMessage("<hr>");
            }
        }else{
            ConsoleAddMessage(this.Name + " Healed: " + points + " points");
            this.RegenAmount--;
            if(this.Health + points > this.MaxHealth){
                this.Health = this.MaxHealth;
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

    GetDamage(attackType){
        let CritHit = Math.random();
        if(CritHit >= 0.80){
            ConsoleAddMessage(this.Name + " Does critical hit");
            this.ChangeStamina((0 - (this.CalculateDamage(attackType) * 2)));
            return this.CalculateDamage(attackType) + ((this.CalculateDamage(attackType) / 100) * 80);
        }
        else{
            return this.CalculateDamage(attackType);
        }
    }

    CalculateDamage(attackType){
        let randomDam = 0;
        if(attackType == "Light"){
            if(Math.random() < .5){
                randomDam = 0 - Math.floor(Math.random() * 2)
            }
            else{
                randomDam = Math.floor(Math.random() * 2);
            }
            return 0 - (Math.floor(this.Level * 3) + randomDam);
        }
        else if(attackType == "Middle"){
            if(Math.random() < .5){
                randomDam = 0 - Math.floor(Math.random() * 2)
            }
            else{
                randomDam = Math.floor(Math.random() * 2);
            }
            return 0 - (Math.floor(this.Level * 6) + randomDam);
        }
        else if(attackType == "Heavy"){
            if(Math.random() < .5){
                randomDam = 0 - Math.floor(Math.random() * 2)
            }
            else{
                randomDam = Math.floor(Math.random() * 2);
            }
            return 0 - (Math.floor(this.Level * 10) + randomDam);
        }
    }

    ResetStats() {
        this.Health = this.MaxHealth;
        this.Armor = this.MaxArmor;
        this.Stamina = this.MaxStamina;
        this.RegenAmount = 2;
    }
}