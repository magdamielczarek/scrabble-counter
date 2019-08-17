import Letter from "./Letter";

export default class Word {
    constructor(value,letters = [],bonuses = [], bonus2 = false, bonus3 = false, bonusScrabble = false, sum = 0, pointBase = 0){
        this.id = 'id' + Math.random().toString(36).substr(2, 16);
        this.value = value;
        this.letters = [...value].map((letter) => {
            return new Letter(letter);
        });
        this.bonus2 = bonus2;
        this.bonus3 = bonus3;
        this.bonusScrabble = bonusScrabble;
        this.pointBase = pointBase;
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

    displaySum(context){
        context.textContent = this.getSum();
    }

    setBonus2(bonus2value){
        this.bonus2 = bonus2value;
    }

    setBonus3(bonus3value){
        this.bonus3 = bonus3value;
    }

    setBonusScrabble(bonusScrabbleValue){
        this.bonusScrabble = bonusScrabbleValue;
    }

    updatePoints(bonus,state){
        if(bonus === 'x2'){
            this.setBonus2(state);
            if(state){
                this.setBonus3(false);
            }
        } else if(bonus === 'x3'){
            this.setBonus3(state);
            if(state){
                this.setBonus2(false);
            }
        } else if(bonus === '+50') {
            this.setBonusScrabble(state);
            if (state) {
                this.setBonusScrabble(true);
            }
        }

        if(this.bonus2){
            this.sum *= 2;
        } else if(this.bonus3){
            this.sum *= 3;
        } else if(!this.bonus2 && !this.bonus3){
            this.sum *= 1;
        }

        if(this.bonusScrabble){
            this.sum += 50;
        }
    }

}