import Letter from "./Letter";

export default class Word {
    constructor(value,letters = [],bonuses = [], bonus2 = false, bonus3 = false, bonusScrabble = false, sum = 0){
        this.id = 'id' + Math.random().toString(36).substr(2, 16);
        this.value = value;
        this.letters = [...value].map((letter) => {
            return new Letter(letter)
        });
        this.bonus2 = bonus2;
        this.bonus3 = bonus3;
        this.bonusScrabble = bonusScrabble;
        this.sum = sum;
    }

    getLetters(){
        return this.letters;
    }

    setSum() {
        this.sum = this.letters.reduce((acc,curr) => {
            return acc + curr.points;
        },0);
    }

    getSum(){
        return this.sum;
    }

    //@context = html element;
    displaySum(context){
        context.textContent = this.getSum();
    }

}