let ConsoleText = [];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function SetSliderVal(selector, newVal){
    let slider = document.querySelector(selector);

    slider.style.width = newVal + "%";
}

function SetSliderText(selector, newVal){
    let text = document.querySelector(selector);

    text.innerHTML = newVal;
}

function UpdateText(){
    const PlayerTi = document.querySelector("#Player > .title");
    PlayerTi.innerHTML = MyPlayer.Name + " Lvl-" + MyPlayer.Level;

    SetSliderVal("#Player #health", MyPlayer.Health / (MyPlayer.MaxHealth / 100));
    SetSliderText("#Player .sliderHealthText", "Health: " + MyPlayer.Health);

    SetSliderVal("#Player #armor", MyPlayer.Armor / (MyPlayer.MaxArmor / 100));
    SetSliderText("#Player .sliderArmorText", "Armor: " + MyPlayer.Armor);
    
    SetSliderVal("#Player #stamina", MyPlayer.Stamina / (MyPlayer.MaxStamina / 100));
    SetSliderText("#Player .sliderStamText", "Stamina: " + MyPlayer.Stamina);

    const EnemyTi = document.querySelector("#Enemy > .title");
    EnemyTi.innerHTML = CurEnemy.Name + " Lvl-" + CurEnemy.Level;

    SetSliderVal("#Enemy #health", CurEnemy.Health / (CurEnemy.MaxHealth / 100));
    SetSliderText("#Enemy .sliderHealthText", "Health: " + CurEnemy.Health);

    SetSliderVal("#Enemy #armor", CurEnemy.Armor / (CurEnemy.MaxArmor / 100));
    SetSliderText("#Enemy .sliderArmorText", "Armor: " + CurEnemy.Armor);

    SetSliderVal("#Enemy #stamina", CurEnemy.Stamina / (CurEnemy.MaxStamina / 100));
    SetSliderText("#Enemy .sliderStamText", "Stamina: " + CurEnemy.Stamina);

    const consoleEl = document.querySelector("#console");
    if(consoleEl != null){
        consoleEl.innerHTML = "";
        let ReverseText = ReverseArray(ConsoleText);
        ReverseText.forEach(Text => {
            let row = document.createElement("p");
            if(Text.includes(MyPlayer.Name)){
                row.innerHTML = "<b class='left'> <- </b>";
                row.innerHTML = row.innerHTML + Text;
            }
            else if(!Text.includes(MyPlayer.Name)){
                row.innerHTML = Text;
                row.innerHTML = row.innerHTML + "<b class='right'> -> </b>";
            }
            else{
                row.innerHTML = Text;
            }
            if(Text.includes("critical") || Text.includes("Died")){
                row.classList.add("Crit");
            }
            if(Text.includes("Healed")){
                row.classList.add("Heal");
            }
            if(Text.includes("Misses")){
                row.classList.add("Miss");
            }
            if(Text.includes("Rested")){
                row.classList.add("Rest");
            }
            consoleEl.appendChild(row);
        });
    }
}

function normalize(value, min, max) {
    return (value - min) / (max - min);
}

function ReverseArray(curArray){
    let ReversedArray = [];
    let step = curArray.length;
    curArray.forEach(Val => {
        step--;
        ReversedArray[step] = Val;
    });

    return ReversedArray;
}

function ShowHideEl(Selector, State, Zindex){
    const element = document.querySelector(Selector);

    if(State != null){
        element.style.zIndex = Zindex;
        if(State){
            element.style.opacity = 1;
        }
        else{
            element.style.opacity = 0;
        }
    }else{
        if(element.style.opacity == 0){
            element.style.opacity = 1;
        }
        else{
            element.style.opacity = 0;
        }
    }
}

function ConsoleAddMessage(message){
    ConsoleText[ConsoleText.length] = message;
}

function CreateRemoveConsole(){
    const Console = document.querySelector("#console");
    if(Console == null){
        CreateConsole();
    }else{
        RemoveElement("#console");
    }
}

function RemoveElement(Selector){
    const element = document.querySelector(Selector).remove();
}

function CreateConsole(){
    const Console = document.createElement("div");
    Console.id = "console";
    const MiddlePart = document.querySelector("#middle");

    MiddlePart.appendChild(Console);
    UpdateText();
}

function TransformEl(Selector, State, Zindex){
    const element = document.querySelector(Selector);

    if(State != null){
        element.style.zIndex = Zindex;
        if(State){
            element.style.opacity = 1;
        }
        else{
            element.style.opacity = 0;
        }
    }else{
        if(element.style.opacity == 0){
            element.style.opacity = 1;
        }
        else{
            element.style.opacity = 0;
        }
    }
}

function UpdateButton(){
    const LiAtButton = document.querySelector("#LightAttack");
    const MiAtButton = document.querySelector("#MiddleAttack");
    const HeAtButton = document.querySelector("#HeavyAttack");
    const RestButton = document.querySelector("#RestButton");
    const HealButton = document.querySelector("#HealButton");

    if(!PlayerMove || MyPlayer.Health == 0){
        LiAtButton.disabled = true;
        MiAtButton.disabled = true;
        HeAtButton.disabled = true;
        RestButton.disabled = true;
        HealButton.disabled = true;
    }else{
        if(MyPlayer.Stamina > 0){
            if(MyPlayer.Stamina >= (0 - (MyPlayer.CalculateDamage("Light") * 2)))
            {LiAtButton.disabled = false;}
            else{LiAtButton.disabled = true;}

            if(MyPlayer.Stamina >= (0 - (MyPlayer.CalculateDamage("Middle") * 2)))
            {MiAtButton.disabled = false;}
            else{MiAtButton.disabled = true;}

            if(MyPlayer.Stamina >= (0 - (MyPlayer.CalculateDamage("Heavy") * 2)))
            {HeAtButton.disabled = false;}
            else{HeAtButton.disabled = true;}
        }
        else{
            LiAtButton.disabled = true;
            MiAtButton.disabled = true;
            HeAtButton.disabled = true;
        }

        if(MyPlayer.Health < MyPlayer.MaxHealth && MyPlayer.RegenAmount > 0){
            HealButton.disabled = false;
        }else{
            HealButton.disabled = true;
        }

        if(MyPlayer.Stamina < 100){
            RestButton.disabled = false;
        }
        else{
            RestButton.disabled = true;
        }
    }
}

let allEnemys = [];

function CreateEnemy(){
    allEnemys[allEnemys.length] = CurEnemy;
    let lastEnemy = allEnemys[allEnemys.length - 1];
    let upgradeChange = Math.random();
    if(upgradeChange >= .66){
        CurEnemy = new Enemy(lastEnemy.MaxHealth + 10, lastEnemy.MaxStamina, lastEnemy.MaxArmor, lastEnemy.Level + 1);
    }
    else if(upgradeChange >= .33){
        CurEnemy = new Enemy(lastEnemy.MaxHealth, lastEnemy.MaxStamina, lastEnemy.MaxArmor + 10, lastEnemy.Level + 1);
    }else{
        CurEnemy = new Enemy(lastEnemy.MaxHealth, lastEnemy.MaxStamina + 10, lastEnemy.MaxArmor, lastEnemy.Level + 1);
    }
    document.querySelector("#Enemy").classList.remove("Dead");
    ShowHideEl("#winScreen", false, -10);
}

function NextScene(){
    CreateEnemy();
    MyPlayer.ResetStats();
    CurEnemy.ResetStats();
    ShowHideEl("#levelScreen", false, -10);
    UpdateButton();
    UpdateText();
}

function ResetScene(){
    CurEnemy = FirstEnemy;
    MyPlayer = MyFirstPlayer;
    MyPlayer.ResetStats();
    CurEnemy.ResetStats();
    UpdateButton();
    UpdateText();

    ShowHideEl("#winScreen", false, -10);
    ShowHideEl("#loseScreen", false, -10);
    
    const Enemy = document.querySelector("#Enemy");
    Enemy.classList.remove("Dead");

    const Player = document.querySelector("#Player");
    Player.classList.remove("Dead");
    ChangeMove();
}