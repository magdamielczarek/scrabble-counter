import '../scss/styles.scss';
import './Word';
import './GameBoard';
import './Letter';
import './Player';

import Word from "./Word";
import Player from "./Player";

window.addEventListener('load',
    () => {
        const board = new GameBoard();
        const addWordForm = document.querySelector('#addWord');
        const addPlayerForm = document.querySelector('#addPlayer');
        const startGameBtn = document.querySelector('#startGame');
        const savePlayers = document.querySelector('#savePlayers');
        const passButton = document.querySelector('#pass');
        const sumButton = document.querySelector('#addSum');

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
        this.gameStatus = false;
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
        // wyczysc tablice slow
        // usun slowa z planszy
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
                        <button class="bonus__button bonus__button--x2">x2</button>
                        <button class="bonus__button bonus__button--x3">x3</button>
                    </div>
            `;
            const letterGroup = document.createElement('div');
            letterGroup.classList.add('letter-group');
            letterGroup.innerHTML = template;
            wordElement.insertAdjacentElement('beforeend',letterGroup);
        });
        wordElement.innerHTML += `<div class="word-bonus">
                <button class="bonus__button bonus__button--x2word">x3</button>
                <button class="bonus__button bonus__button--x3word">x4</button>
                <button class="bonus__button bonus__button--scrabble">scrabble</button>
            </div>`;
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