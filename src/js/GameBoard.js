import Word from "./Letter";
import Word from "./Word";
import Player from "./Player";

class GameBoard {
    constructor(players = [], activePlayer = 0, words = []) {
        this.players = players;
        this.activePlayer = activePlayer;
        this.words = words;
        this.points = 0;
    }

    addPlayer(name,context){
        const player = Player(this.players.length,name || this.players.length + 1, 0);
        this.players.push(player);
        this.displayPlayer(context,player);
    }

    displayPlayer(context,player){
        const playerElement = document.createElement('th');
        playerElement.textContent = player.name;
        context.insertAdjacentElement('beforeend', playerElement);
    }

    getPlayers(){
        return this.players;
    }

    clearBoard(){
        this.players = [];
        this.words = [];
        this.points = 0;
        this.activePlayer = undefined;
    }

    initializeGame(){
        this.activePlayer = this.players[0].id;
        document.querySelector('.player-name').innerText = this.players[this.activePlayer].name;
    }

    addWord(value){
        const word = new Word(value);
        const wordElement = document.createElement('div');

        wordElement.classList.add('letters-container');
        wordElement.innerHTML = ``;
        document.querySelector('.board__word').insertAdjacentElement('beforeend',wordElement);
        this.words.push(word);
        word.getLetters().map((letter) => {
            const template = `
                    <span class="letter">${letter.char}<span class="letter__score">${letter.points}</span></span>
                    <div class="bonus">
                        <div class="bonus__container">
                            <input id=${letter.id}x2 name=${letter.id} data-letter-bonus="x2" data-letter-id=${letter.id} type="checkbox">
                            <label for=${letter.id}x2 class="bonus__button bonus__button--x2">x2</label>
                        </div>
                        <div class="bonus__container">
                            <input id=${letter.id}x3 name=${letter.id} data-letter-bonus="x3" data-letter-id=${letter.id} type="checkbox">
                            <label for=${letter.id}x3 class="bonus__button bonus__button--x3">x3</label>
                        </div>
                    </div>
            `;
            const letterGroup = document.createElement('div');
            letterGroup.classList.add('letter-group');
            letterGroup.innerHTML = template;
            wordElement.insertAdjacentElement('beforeend',letterGroup);
        });
        wordElement.innerHTML += `<div class="word-bonus">
                <div class="bonus__container">
                     <input id=${word.id}x2 name=${word.id} data-word-bonus="x2" data-word-id=${word.id} type="checkbox">
                     <label for=${word.id}x2 class="bonus__button bonus__button--x2word">x2</label>
                </div>
                <div class="bonus__container">
                     <input id=${word.id}x3 name=${word.id} data-word-bonus="x3" data-word-id=${word.id} type="checkbox">
                     <label for=${word.id}x3 class="bonus__button bonus__button--x3word">x3</label>
                </div>
                <div class="bonus__container">
                      <input id=${word.id}+50 name=${word.id} data-word-bonus="+50" data-word-id=${word.id} type="checkbox">
                      <label for=${word.id}+50 class="bonus__button bonus__button--scrabble">scrabble</label>
                </div>
                <div class="word-sum" data-word-id=${word.id}></div>
            </div>`;

        word.setSum();
        word.displaySum(document.querySelector('.word-sum[data-word-id='+word.id+']'));
        this.getSum();
        this.displaySum(document.querySelector('.board__summary__score > span'));

        const bonusLetterBtns = document.querySelectorAll('[data-letter-bonus]');
        const bonusWordBtns = document.querySelectorAll('[data-word-id] ~ input');

        bonusLetterBtns.forEach((btn) => {
            btn.addEventListener('change', (event) => {
                const letterId = event.target.getAttribute('data-letter-id');
                const bonus = event.target.getAttribute('data-letter-bonus');
                const thisLetter = word.letters.find(letter => {
                    return letter.id === letterId;
                });

                thisLetter.updatePoints(bonus,event.target.checked);
                word.setSum();
                word.displaySum(document.querySelector('.word-sum[data-word-id='+word.id+']'));
                this.getSum();
                this.displaySum(document.querySelector('.board__summary__score > span'));
            });
        });

        bonusWordBtns.forEach((btn) => {
            btn.addEventListener('click', () => {

            });
        });
    }

    removeWord(id){

    }

    switchTurn(){
        if(this.activePlayer === this.getPlayers().length - 1){
            this.activePlayer = 0;
        } else {
            this.activePlayer = this.activePlayer + 1;
        }
        document.querySelector('.player-name').innerText = this.players[this.activePlayer].name;
    }

    pass(){
        this.switchTurn();
        this.clearBoard();
    }

    getSum(){
        return this.words.reduce((acc,curr) => {
            return acc + curr.getSum();
        },0);
    }

    displaySum(context){
        context.textContent = this.getSum();
    }
}