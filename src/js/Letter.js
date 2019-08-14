const punctation = [
    {
        char: "a",
        value: 1
    },{
        char: "ą",
        value: 5
    },{
        char: "b",
        value: 3
    },{
        char: "c",
        value: 2
    },{
        char: "ć",
        value: 6
    },{
        char: "d",
        value: 2
    },{
        char: "e",
        value: 1
    },{
        char: "f",
        value: 5
    },{
        char: "g",
        value: 3
    },{
        char: "h",
        value: 3
    },{
        char: "i",
        value: 1
    },{
        char: "j",
        value: 3
    },{
        char: "k",
        value: 2
    },{
        char: "l",
        value: 2
    },{
        char: "ł",
        value: 3
    },{
        char: "m",
        value: 2
    },{
        char: "n",
        value: 1
    },{
        char: "ń",
        value: 7
    },{
        char: "o",
        value: 1
    },{
        char: "ó",
        value: 5
    },{
        char: "p",
        value: 2
    },{
        char: "r",
        value: 1
    },{
        char: "s",
        value: 1
    },{
        char: "ś",
        value: 5
    },{
        char: "t",
        value: 2
    },{
        char: "u",
        value: 3
    },{
        char: "w",
        value: 1
    },{
        char: "y",
        value: 2
    },{
        char: "z",
        value: 1
    },{
        char: "ź",
        value: 9
    },{
        char: "ż",
        value: 5
    }];

export default class Letter {
    constructor(char,points,bonus = 0, bonus2 = false, bonus3 = false){
        this.id = Math.random().toString(36).substr(2, 16);
        this.char = char;
        this.points = punctation.filter((punct) => {
            return punct.char === this.char;
        })[0].value;
        this.bonus = bonus;
        this.bonus2 = bonus2;
        this.bonus3 = bonus3;
    }

    setBonus(bonus){
        this.bonus = bonus;
    }

    setBonus2(bonus2value){
        this.bonus2 = bonus2value;
    }

    setBonus3(bonus3value){
        this.bonus3 = bonus3value;
    }

    updatePoints(bonus,state){
        if(bonus === 'x2'){
            this.bonus2 = state;
            this.bonus3 = false;
        } else if(bonus === 'x3'){
            this.bonus2 = false;
            this.bonus3 = state;
        }

        if(this.bonus2){
            this.points *= 2;
        } else if(this.bonus3){
            this.points *= 3;
        } else if(!this.bonus2 && !this.bonus3){
            this.points = punctation.filter((punct) => {
                return punct.char === this.char;
            })[0].value;
        }
        console.log(this.points);
    }

    getBonus(bonus){
        return this.bonus;
    }
}


