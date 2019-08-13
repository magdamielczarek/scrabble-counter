export default class Player {
    constructor(id,name,score = 0,isActive = false){
        this.id = id;
        this.name = name;
        this.score = score;
        this.isActive = isActive;
    }
}