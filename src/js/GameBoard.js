import Letter from "./Letter";
import Word from "./Word";
import Player from "./Player";

export default class GameBoard {
    constructor(players = [], activePlayer = 0, words = [],currentSum = 0) {
        this.players = players;
        this.activePlayer = activePlayer;
        this.words = words;
        this.currentSum = currentSum;
    }

    addPlayer(name){
        const player = new Player(this.players.length,name || this.players.length + 1);
        this.players.push(player);
        return player;
        // this.displayPlayer(context,player);
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
        this.words = [];
        this.currentSum = 0;
        document.querySelector('.board__word').innerHTML = '';
        document.querySelector('.board__summary__score span').textContent = '0';
    }

    initializeGame(){
        this.activePlayer = this.players[0].id;
        document.querySelector('.player-name').innerText = this.players[this.activePlayer].name;
        document.querySelectorAll('button:not(#addSum)').forEach((button) => {
            button.removeAttribute('disabled');
        });
        document.querySelectorAll('input').forEach((button) => {
            button.removeAttribute('disabled');
        });
        this._addScoresRow();
        for(let i = 0; i < this.getPlayers().length; i++){
            document.querySelector('tfoot tr').insertAdjacentHTML('beforeend','<td>0</td>');
        }
    }

    addWord(value){
        const word = new Word(value);
        this.words.push(word);
        return word;
    }

    displayWord(wordContext,word){
        const wordElement = document.createElement('div');
        wordElement.classList.add('letters-container');
        wordElement.setAttribute('id', word.id+'container');
        wordElement.innerHTML = ``;
        wordContext.insertAdjacentElement('beforeend',wordElement);

        // display all letters from that word on the board
        word.getLetters().map((letter) => {
            const template = `
                    <span class="letter">${letter.char}<span class="letter__score">${letter.points}</span></span>
                    <form id=${letter.id} class="bonus">
                        <div class="bonus__container">
                            <input id=${letter.id}x2 name=${letter.id} data-letter-bonus="x2" data-letter-id=${letter.id} type="checkbox">
                            <label for=${letter.id}x2 class="bonus__button bonus__button--x2">x2</label>
                        </div>
                        <div class="bonus__container">
                            <input id=${letter.id}x3 name=${letter.id} data-letter-bonus="x3" data-letter-id=${letter.id} type="checkbox">
                            <label for=${letter.id}x3 class="bonus__button bonus__button--x3">x3</label>
                        </div>
                    </form>
            `;
            const letterGroup = document.createElement('div');
            letterGroup.classList.add('letter-group');
            letterGroup.innerHTML = template;
            wordElement.insertAdjacentElement('beforeend',letterGroup);
            document.querySelector('#addSum').removeAttribute('disabled');
        });

        // add bonuses for each letter and for whole word
        wordElement.innerHTML += `<div class="word-bonus">
                <button class="delete-word-btn"><img src="../assets/svg/delete.svg"/></button>
                <div class="bonus__container">
                     <input id=${word.id}x2 data-word-bonus="x2" data-word-id=${word.id} type="checkbox">
                     <label for=${word.id}x2 class="bonus__button bonus__button--x2word">x2</label>
                </div>
                <div class="bonus__container">
                     <input id=${word.id}x3 data-word-bonus="x3" data-word-id=${word.id} type="checkbox">
                     <label for=${word.id}x3 class="bonus__button bonus__button--x3word">x3</label>
                </div>
                <div class="bonus__container">
                      <input id=${word.id}+50 data-word-bonus="+50" data-word-id=${word.id} type="checkbox">
                      <label for=${word.id}+50 class="bonus__button bonus__button--scrabble">scrabble</label>
                </div>
                <div class="word-sum" data-word-id=${word.id}></div>
            </div>`;

        word.setSum();
        word.updatePoints();
        word.displaySum(document.querySelector('.word-sum[data-word-id='+word.id+']'));
        this.getSum();
        this.displaySum(document.querySelector('.board__summary__score > span'));

        const bonusLetterBtns = document.querySelectorAll('[data-letter-bonus]');
        const bonusWordBtns = document.querySelectorAll('input[data-word-id='+ word.id + ']');

        bonusLetterBtns.forEach((btn) => {
            btn.addEventListener('change', (event) => {
                const letterId = event.target.getAttribute('data-letter-id');
                const bonus = event.target.getAttribute('data-letter-bonus');
                const thisLetter = word.letters.find(letter => {
                    return letter.id === letterId;
                });

                thisLetter.updatePoints(bonus,event.target.checked);
                word.setSum();
                word.updatePoints();
                word.displaySum(document.querySelector('.word-sum[data-word-id='+word.id+']'));
                this.getSum();
                this.displaySum(document.querySelector('.board__summary__score > span'));
            });
        });

        bonusWordBtns.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                const wordId = event.target.getAttribute('data-word-id');
                const bonus = event.target.getAttribute('data-word-bonus');

                word.setSum();
                word.updatePoints(bonus,event.target.checked);
                word.displaySum(document.querySelector('.word-sum[data-word-id='+word.id+']'));

                this.displaySum(document.querySelector('.board__summary__score > span'));

            });
        });

        document.querySelector('#' + word.id +'container .delete-word-btn').addEventListener('click', () => {
            this.removeWord(word.id);
            this.getSum();
            this.displaySum(document.querySelector('.board__summary__score > span'));
        });
    }

    removeWord(id){
        const index = this.words.findIndex(word => word.id === id );
        const removed = document.getElementById(id +'container');
        console.log(removed);
        this.words.splice(index,1);
        document.querySelector('.board__word').removeChild(removed);
        if(!this.words.length){
            document.querySelector('#addSum').setAttribute('disabled',true);
        }
    }

    switchTurn(){
        this.activePlayer = this.activePlayer + 1;
        if(this.activePlayer === this.getPlayers().length){
            this.activePlayer = 0;
            this._addScoresRow();
        }
        document.querySelector('.player-name').innerText = this.players[this.activePlayer].name;
    }

    _addScoresRow(){
        const newRow = document.createElement('tr');
        for(let i = 0; i < this.getPlayers().length; i++){
            newRow.insertAdjacentHTML('beforeend','<td></td>');
        }
        document.querySelector('.players tbody').insertAdjacentElement('beforeend',newRow);
    }

    pass(){
        this.currentSum = 0;
        this.switchTurn();
        this.clearBoard();
    }

    resetGame(){
        this.clearBoard();
        this.players = [];
        this.activePlayer = 0;
        document.querySelector('.player-name').textContent = '';
        document.querySelectorAll('main button, #word').forEach((btn) => {
            btn.setAttribute('disabled',true);
        });
    }

    getSum(){
        return this.words.reduce((acc,curr) => {
            return acc + curr.getSum();
        },0);
    }

    displaySum(context){
        const sum = this.getSum();
        this.currentSum = sum;
        context.textContent = sum;
    }

    addPlayerScore(score = this.currentSum){
        this.players[this.activePlayer].addScore(score);
        document.querySelector('.scores tbody tr:last-of-type td:nth-of-type(' + Number(this.activePlayer + 1) +')').textContent = score;
        document.querySelector('#addSum').setAttribute('disabled',true);
    }

    displayPlayerSummary(){
        const sum = this.players[this.activePlayer].getSum();
        document.querySelector('.scores tfoot tr td:nth-of-type(' + Number(this.activePlayer + 1) +')').textContent = sum;
    }
}