import '../scss/styles.scss';
import './Word';
import './GameBoard';
import './Letter';
import './Player';

import GameBoard from "./GameBoard";

window.addEventListener('load',
    () => {
        const board = new GameBoard(),
            addWordForm = document.querySelector('#addWord'),
            addPlayerForm = document.querySelector('#addPlayer'),
            startGameBtn = document.querySelector('#startGame'),
            savePlayers = document.querySelector('#savePlayers'),
            passButton = document.querySelector('#pass'),
            sumButton = document.querySelector('#addSum');

        passButton.addEventListener('click', () => {
            board.addPlayerScore();
            board.switchTurn();
        });

        addWordForm.addEventListener('submit',function(event){
            event.preventDefault();
            if(this.elements.word.value === ''){
                return;
            } else {
                const text = this.elements.word.value.toLowerCase();
                board.displayWord(document.querySelector('.board__word'),board.addWord(text));
                this.reset();
            }
        });

        addPlayerForm.addEventListener('submit',function(event){
            event.preventDefault();
            const playersNumber = board.getPlayers().length;
            const newPlayer = board.addPlayer(this.elements.player.value);
            board.displayPlayer(document.querySelector('.scores thead tr'),newPlayer);
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
            board.resetGame();
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

        sumButton.addEventListener('click', (event) => {
            board.addPlayerScore();
            board.displayPlayerSummary();
            board.switchTurn();
            board.clearBoard();
        });


    }, false);