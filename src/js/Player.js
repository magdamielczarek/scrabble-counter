export default class Player {
    constructor(id,name,score = [],isActive = false){
        this.id = id;
        this.name = name;
        this.score = score;
        this.isActive = isActive;
    }

    addScore(score){
        this.score.push(score);
    }

    getSum(){
        return this.score.reduce((acc,curr) => {
            return acc + curr;
        });
    }
}