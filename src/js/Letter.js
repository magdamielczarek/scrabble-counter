export default class Letter {
    constructor(char,points,bonus = 0){
        this.char = char;
        this.points = points;
        this.bonus = bonus;
    }

    setBonus(bonus){
        this.bonus = bonus;
    }

    getBonus(bonus){
        return this.bonus;
    }
}

//Math.random().toString(36).substr(2, 16)

