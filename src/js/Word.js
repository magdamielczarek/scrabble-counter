import Letter from "./Letter";

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

export default class Word {
    constructor(value,letters = [],bonuses = [], sum = 0){
        this.value = value;
        this.letters = [...value].map((letter) => {
            return new Letter(letter, (punctation.filter((punct) => {
                return punct.char === letter
            })[0].value))
        });
        this.bonuses = bonuses;
        this.sum = sum;
    }

    getLetters(){
        return this.letters;
    }

    getSum(){

    }
}