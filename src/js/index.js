import '../scss/styles.scss';
import './Word';
import './GameBoard';
import './Letter';
import './Player';

import Word from "./Word";
import Player from "./Player";

window.addEventListener('load',
    () => {
        const board = new GameBoard(),
            addWordForm = document.querySelector('#addWord'),
            addPlayerForm = document.querySelector('#addPlayer'),
            startGameBtn = document.querySelector('#startGame'),
            savePlayers = document.querySelector('#savePlayers'),
            passButton = document.querySelector('#pass'),
            sumButton = document.querySelector('#addSum');

        passButton.addEventListener('click', () => board.switchTurn());

        sumButton.addEventListener('click', () => {
            board.switchTurn();
        });

        addWordForm.addEventListener('submit',function(event){
            event.preventDefault();
            if(this.elements.word.value === ''){
                return;
            } else {
                board.addWord(this.elements.word.value.toLowerCase());
            }
        });

        addPlayerForm.addEventListener('submit',function(event){
            event.preventDefault();
            const playersNumber = board.getPlayers().length;
            board.addPlayer(this.elements.player.value);
            this.reset();
            if(playersNumber >= 1){
                savePlayers.removeAttribute('disabled');
            }
            if(playersNumber >= 3){
                addPlayerForm.classList.toggle('add-players--showed');
                board.initializeGame();
            }
        });

        savePlayers.addEventListener('click',(event) => {
            addPlayerForm.classList.toggle('add-players--showed');
            board.initializeGame();
        });

        startGameBtn.addEventListener('click',(event) => {
            event.preventDefault();
            savePlayers.setAttribute('disabled','disabled');
            board.clearBoard();
            document.querySelector('.players').innerHTML = `
                <thead>
                    <tr></tr>
                </thead>
                <tbody></tbody>
                <tfoot>
                    <tr></tr>
                </tfoot>
            `;
            addPlayerForm.classList.toggle('add-players--showed');
        });

    }, false);

class GameBoard {
    constructor(players = [], activePlayer = 0, words = []){
        this.players = players;
        this.activePlayer = activePlayer;
        this.words = words;
        this.points = 0;
    }

    addPlayer(name){
        const player = new Player(this.players.length,name || this.players.length + 1, 0);
        const playerElement = document.createElement('th');
        playerElement.textContent = `${player.name}`;
        this.players.push(player);
        document.querySelector('.scores thead tr').insertAdjacentElement('beforeend', playerElement);
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
                <div class="word-sum" data-word-id="${word.id}"></div>
            </div>`;

        word.getSum();

        const bonusLetterBtns = document.querySelectorAll('[data-letter-bonus]');
        const bonusWordBtns = document.querySelectorAll('[data-word-id] ~ input');

        bonusLetterBtns.forEach((btn) => {
            btn.addEventListener('change', (event) => {
                const letterId = event.target.getAttribute('data-letter-id');
                const bonus = event.target.getAttribute('data-letter-bonus');
                const thisLetter = word.letters.find(letter => letter.id === letterId);

                thisLetter.updatePoints(bonus,btn.checked);
                word.getSum();
                document.querySelector('.word-sum[data-word-id]').textContent = word.getSum();
            });
        });

        bonusWordBtns.forEach((btn) => {
            btn.addEventListener('click', () => {

            });
        });

        console.log(word.getSum());
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

    initializeGame(){
        this.activePlayer = this.players[0].id;
        document.querySelector('.player-name').innerText = this.players[this.activePlayer].name;
    }

    pass(){
        this.switchTurn();
    }
}