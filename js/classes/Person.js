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

    TakeDamage(damage){
        let ans = [];
        for(let i = 0; i < damage; i++){
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
}