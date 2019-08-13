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
            }
        });

        savePlayers.addEventListener('click',(event) => {
            addPlayerForm.classList.toggle('add-players--showed');
        });

        startGameBtn.addEventListener('click',(event) => {
            event.preventDefault();
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
    }

    addPlayer(name){
        const player = new Player(name || this.players.length + 1, 0);
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
    }

    removeWord(id){

    }

    switchTurn(activePlayer){
        this.activePlayer++;
        console.log(this.activePlayer);
    }
}