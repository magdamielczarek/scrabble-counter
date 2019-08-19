/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/svg/delete.svg":
/*!***********************************!*\
  !*** ./src/assets/svg/delete.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/delete.svg";

/***/ }),

/***/ "./src/js/GameBoard.js":
/*!*****************************!*\
  !*** ./src/js/GameBoard.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameBoard; });
/* harmony import */ var _Letter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Letter */ "./src/js/Letter.js");
/* harmony import */ var _Word__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Word */ "./src/js/Word.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/js/Player.js");
/* harmony import */ var _assets_svg_delete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/svg/delete.svg */ "./src/assets/svg/delete.svg");
/* harmony import */ var _assets_svg_delete_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_delete_svg__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var GameBoard =
/*#__PURE__*/
function () {
  function GameBoard() {
    var players = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var activePlayer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var words = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var currentSum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, GameBoard);

    this.players = players;
    this.activePlayer = activePlayer;
    this.words = words;
    this.currentSum = currentSum;
  }

  _createClass(GameBoard, [{
    key: "addPlayer",
    value: function addPlayer(name) {
      var player = new _Player__WEBPACK_IMPORTED_MODULE_2__["default"](this.players.length, name || this.players.length + 1);
      this.players.push(player);
      return player; // this.displayPlayer(context,player);
    }
  }, {
    key: "displayPlayer",
    value: function displayPlayer(context, player) {
      var playerElement = document.createElement('th');
      playerElement.textContent = player.name;
      context.insertAdjacentElement('beforeend', playerElement);
    }
  }, {
    key: "getPlayers",
    value: function getPlayers() {
      return this.players;
    }
  }, {
    key: "clearBoard",
    value: function clearBoard() {
      this.words = [];
      this.currentSum = 0;
      document.querySelector('.board__word').innerHTML = '';
      document.querySelector('.board__summary__score span').textContent = '0';
    }
  }, {
    key: "initializeGame",
    value: function initializeGame() {
      this.activePlayer = this.players[0].id;
      document.querySelector('.player-name').innerText = this.players[this.activePlayer].name;
      document.querySelectorAll('button:not(#addSum)').forEach(function (button) {
        button.removeAttribute('disabled');
      });
      document.querySelectorAll('input').forEach(function (button) {
        button.removeAttribute('disabled');
      });
      this.addScoresRow();

      for (var i = 0; i < this.getPlayers().length; i++) {
        document.querySelector('tfoot tr').insertAdjacentHTML('beforeend', '<td>0</td>');
      }

      document.querySelector('#endGame').classList.toggle('endGame');
    }
  }, {
    key: "addWord",
    value: function addWord(value) {
      var word = new _Word__WEBPACK_IMPORTED_MODULE_1__["default"](value);
      this.words.push(word);
      return word;
    }
  }, {
    key: "displayWord",
    value: function displayWord(wordContext, word) {
      var _this = this;

      var wordElement = document.createElement('div');
      wordElement.classList.add('letters-container');
      wordElement.setAttribute('id', word.id + 'container');
      wordElement.innerHTML = "";
      wordContext.insertAdjacentElement('beforeend', wordElement); // display all letters from that word on the board

      word.getLetters().map(function (letter) {
        var template = "\n                    <span class=\"letter\">".concat(letter["char"], "<span class=\"letter__score\">").concat(letter.points, "</span></span>\n                    <form id=").concat(letter.id, " class=\"bonus\">\n                        <div class=\"bonus__container\">\n                            <input id=").concat(letter.id, "x2 name=").concat(letter.id, " data-letter-bonus=\"x2\" data-letter-id=").concat(letter.id, " type=\"checkbox\">\n                            <label for=").concat(letter.id, "x2 class=\"bonus__button bonus__button--x2\">x2</label>\n                        </div>\n                        <div class=\"bonus__container\">\n                            <input id=").concat(letter.id, "x3 name=").concat(letter.id, " data-letter-bonus=\"x3\" data-letter-id=").concat(letter.id, " type=\"checkbox\">\n                            <label for=").concat(letter.id, "x3 class=\"bonus__button bonus__button--x3\">x3</label>\n                        </div>\n                    </form>\n            ");
        var letterGroup = document.createElement('div');
        letterGroup.classList.add('letter-group');
        letterGroup.innerHTML = template;
        wordElement.insertAdjacentElement('beforeend', letterGroup);
        document.querySelector('#addSum').removeAttribute('disabled');
      }); // add bonuses for each letter and for whole word

      wordElement.innerHTML += "<div class=\"word-bonus\">\n                <button class=\"delete-word-btn\"><img src=\"".concat(_assets_svg_delete_svg__WEBPACK_IMPORTED_MODULE_3___default.a, "\"/></button>\n                <div class=\"bonus__container\">\n                     <input id=").concat(word.id, "x2 data-word-bonus=\"x2\" data-word-id=").concat(word.id, " type=\"checkbox\">\n                     <label for=").concat(word.id, "x2 class=\"bonus__button bonus__button--x2word\">x2</label>\n                </div>\n                <div class=\"bonus__container\">\n                     <input id=").concat(word.id, "x3 data-word-bonus=\"x3\" data-word-id=").concat(word.id, " type=\"checkbox\">\n                     <label for=").concat(word.id, "x3 class=\"bonus__button bonus__button--x3word\">x3</label>\n                </div>\n                <div class=\"bonus__container\">\n                      <input id=").concat(word.id, "+50 data-word-bonus=\"+50\" data-word-id=").concat(word.id, " type=\"checkbox\">\n                      <label for=").concat(word.id, "+50 class=\"bonus__button bonus__button--scrabble\">scrabble</label>\n                </div>\n                <div class=\"word-sum\" data-word-id=").concat(word.id, "></div>\n            </div>");
      word.setSum();
      word.updatePoints();
      word.displaySum(document.querySelector('.word-sum[data-word-id=' + word.id + ']'));
      this.getSum();
      this.displaySum(document.querySelector('.board__summary__score > span'));
      var bonusLetterBtns = document.querySelectorAll('[data-letter-bonus]');
      var bonusWordBtns = document.querySelectorAll('input[data-word-id=' + word.id + ']');
      bonusLetterBtns.forEach(function (btn) {
        btn.addEventListener('change', function (event) {
          var letterId = event.target.getAttribute('data-letter-id');
          var bonus = event.target.getAttribute('data-letter-bonus');
          var thisLetter = word.letters.find(function (letter) {
            return letter.id === letterId;
          });
          thisLetter.updatePoints(bonus, event.target.checked);
          word.setSum();
          word.updatePoints();
          word.displaySum(document.querySelector('.word-sum[data-word-id=' + word.id + ']'));

          _this.getSum();

          _this.displaySum(document.querySelector('.board__summary__score > span'));
        });
      });
      bonusWordBtns.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
          var wordId = event.target.getAttribute('data-word-id');
          var bonus = event.target.getAttribute('data-word-bonus');
          word.setSum();
          word.updatePoints(bonus, event.target.checked);
          word.displaySum(document.querySelector('.word-sum[data-word-id=' + word.id + ']'));

          _this.displaySum(document.querySelector('.board__summary__score > span'));
        });
      });
      document.querySelector('#' + word.id + 'container .delete-word-btn').addEventListener('click', function () {
        _this.removeWord(word.id);

        _this.getSum();

        _this.displaySum(document.querySelector('.board__summary__score > span'));
      });
    }
  }, {
    key: "removeWord",
    value: function removeWord(id) {
      var index = this.words.findIndex(function (word) {
        return word.id === id;
      });
      var removed = document.getElementById(id + 'container');
      console.log(removed);
      this.words.splice(index, 1);
      document.querySelector('.board__word').removeChild(removed);

      if (!this.words.length) {
        document.querySelector('#addSum').setAttribute('disabled', true);
      }
    }
  }, {
    key: "switchTurn",
    value: function switchTurn() {
      this.activePlayer = this.activePlayer + 1;

      if (this.activePlayer === this.getPlayers().length) {
        this.activePlayer = 0;
        this.addScoresRow();
      }

      document.querySelector('.player-name').innerText = this.players[this.activePlayer].name;
    }
  }, {
    key: "addScoresRow",
    value: function addScoresRow() {
      var newRow = document.createElement('tr');

      for (var i = 0; i < this.getPlayers().length; i++) {
        newRow.insertAdjacentHTML('beforeend', '<td></td>');
      }

      document.querySelector('.players tbody').insertAdjacentElement('beforeend', newRow);
    }
  }, {
    key: "pass",
    value: function pass() {
      this.currentSum = 0;
      this.switchTurn();
      this.clearBoard();
    }
  }, {
    key: "resetGame",
    value: function resetGame() {
      this.clearBoard();
      this.players = [];
      this.activePlayer = 0;
      document.querySelector('.player-name').textContent = '';
      document.querySelectorAll('main button, #word').forEach(function (btn) {
        btn.setAttribute('disabled', true);
      });
      document.getElementById('endGame').classList.add('endGame');
    }
  }, {
    key: "getSum",
    value: function getSum() {
      return this.words.reduce(function (acc, curr) {
        return acc + curr.getSum();
      }, 0);
    }
  }, {
    key: "displaySum",
    value: function displaySum(context) {
      var sum = this.getSum();
      this.currentSum = sum;
      context.textContent = sum;
    }
  }, {
    key: "addPlayerScore",
    value: function addPlayerScore() {
      var score = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.currentSum;
      this.players[this.activePlayer].addScore(score);
      document.querySelector('.scores tbody tr:last-of-type td:nth-of-type(' + Number(this.activePlayer + 1) + ')').textContent = score;
      document.querySelector('#addSum').setAttribute('disabled', true);
    }
  }, {
    key: "displayPlayerSummary",
    value: function displayPlayerSummary() {
      var sum = this.players[this.activePlayer].getSum();
      document.querySelector('.scores tfoot tr td:nth-of-type(' + Number(this.activePlayer + 1) + ')').textContent = sum;
    }
  }, {
    key: "endGame",
    value: function endGame() {
      var _this2 = this;

      var scores = [];
      this.getPlayers().forEach(function (player) {
        scores.push(player.getSum());
      });
      var result = Math.max.apply(Math, scores);
      var indices = scores.reduce(function (acc, curr, i) {
        return curr === result ? acc.concat(i) : acc;
      }, []);
      indices.forEach(function (i) {
        document.querySelector('.board__word').innerHTML = "<p class=\"result-info\">\uD83C\uDFC6\uD83C\uDFC6\uD83C\uDFC6 <br/> wygrywa <strong>".concat(_this2.getPlayers()[i].name, "</strong><br/>").concat(result, " punkt\xF3w</p>");
      });
      document.getElementById('endGame').classList.add('endGame');
    }
  }]);

  return GameBoard;
}();



/***/ }),

/***/ "./src/js/Letter.js":
/*!**************************!*\
  !*** ./src/js/Letter.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Letter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var punctation = [{
  "char": "a",
  value: 1
}, {
  "char": "ą",
  value: 5
}, {
  "char": "b",
  value: 3
}, {
  "char": "c",
  value: 2
}, {
  "char": "ć",
  value: 6
}, {
  "char": "d",
  value: 2
}, {
  "char": "e",
  value: 1
}, {
  "char": "ę",
  value: 5
}, {
  "char": "f",
  value: 5
}, {
  "char": "g",
  value: 3
}, {
  "char": "h",
  value: 3
}, {
  "char": "i",
  value: 1
}, {
  "char": "j",
  value: 3
}, {
  "char": "k",
  value: 2
}, {
  "char": "l",
  value: 2
}, {
  "char": "ł",
  value: 3
}, {
  "char": "m",
  value: 2
}, {
  "char": "n",
  value: 1
}, {
  "char": "ń",
  value: 7
}, {
  "char": "o",
  value: 1
}, {
  "char": "ó",
  value: 5
}, {
  "char": "p",
  value: 2
}, {
  "char": "r",
  value: 1
}, {
  "char": "s",
  value: 1
}, {
  "char": "ś",
  value: 5
}, {
  "char": "t",
  value: 2
}, {
  "char": "u",
  value: 3
}, {
  "char": "w",
  value: 1
}, {
  "char": "y",
  value: 2
}, {
  "char": "z",
  value: 1
}, {
  "char": "ź",
  value: 9
}, {
  "char": "ż",
  value: 5
}];

var Letter =
/*#__PURE__*/
function () {
  function Letter(_char, points) {
    var _this = this;

    var bonus2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var bonus3 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, Letter);

    this.id = 'id' + Math.random().toString(36).substr(2, 16);
    this["char"] = _char;
    this.pointBase = punctation.filter(function (punct) {
      return punct["char"] === _this["char"];
    })[0].value;
    this.points = punctation.filter(function (punct) {
      return punct["char"] === _this["char"];
    })[0].value;
    this.bonus2 = bonus2;
    this.bonus3 = bonus3;
  }

  _createClass(Letter, [{
    key: "setBonus2",
    value: function setBonus2(bonus2value) {
      this.bonus2 = bonus2value;
    }
  }, {
    key: "setBonus3",
    value: function setBonus3(bonus3value) {
      this.bonus3 = bonus3value;
    }
  }, {
    key: "updatePoints",
    value: function updatePoints(bonus, state) {
      if (bonus === 'x2') {
        this.setBonus2(state);

        if (state) {
          this.setBonus3(false);
          document.querySelector('input[id=' + this.id + 'x3]').checked = false;
        }
      } else if (bonus === 'x3') {
        this.setBonus3(state);

        if (state) {
          this.setBonus2(false);
          document.querySelector('input[id=' + this.id + 'x2]').checked = false;
        }
      }

      if (this.bonus2) {
        this.points = this.pointBase * 2;
      } else if (this.bonus3) {
        this.points = this.pointBase * 3;
      } else if (!this.bonus2 && !this.bonus3) {
        this.points = this.pointBase;
      }
    }
  }]);

  return Letter;
}();



/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player =
/*#__PURE__*/
function () {
  function Player(id, name) {
    var score = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var isActive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, Player);

    this.id = id;
    this.name = name;
    this.score = score;
    this.isActive = isActive;
  }

  _createClass(Player, [{
    key: "addScore",
    value: function addScore(score) {
      this.score.push(score);
    }
  }, {
    key: "getSum",
    value: function getSum() {
      return this.score.reduce(function (acc, curr) {
        return acc + curr;
      });
    }
  }]);

  return Player;
}();



/***/ }),

/***/ "./src/js/Word.js":
/*!************************!*\
  !*** ./src/js/Word.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Word; });
/* harmony import */ var _Letter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Letter */ "./src/js/Letter.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Word =
/*#__PURE__*/
function () {
  function Word(value) {
    var letters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var bonuses = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var bonus2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var bonus3 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var bonusScrabble = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var sum = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var pointBase = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;

    _classCallCheck(this, Word);

    this.id = 'id' + Math.random().toString(36).substr(2, 16);
    this.value = value;
    this.letters = _toConsumableArray(value).map(function (letter) {
      return new _Letter__WEBPACK_IMPORTED_MODULE_0__["default"](letter);
    });
    this.bonus2 = bonus2;
    this.bonus3 = bonus3;
    this.bonusScrabble = bonusScrabble;
    this.pointBase = pointBase;
    this.sum = sum;
  }

  _createClass(Word, [{
    key: "getLetters",
    value: function getLetters() {
      return this.letters;
    }
  }, {
    key: "setSum",
    value: function setSum() {
      this.sum = this.letters.reduce(function (acc, curr) {
        return acc + curr.points;
      }, 0);
    }
  }, {
    key: "getSum",
    value: function getSum() {
      return this.sum;
    }
  }, {
    key: "displaySum",
    value: function displaySum(context) {
      context.textContent = this.getSum();
    }
  }, {
    key: "setBonus2",
    value: function setBonus2(bonus2value) {
      this.bonus2 = bonus2value;
    }
  }, {
    key: "setBonus3",
    value: function setBonus3(bonus3value) {
      this.bonus3 = bonus3value;
    }
  }, {
    key: "setBonusScrabble",
    value: function setBonusScrabble(bonusScrabbleValue) {
      this.bonusScrabble = bonusScrabbleValue;
    }
  }, {
    key: "updatePoints",
    value: function updatePoints(bonus, state) {
      if (bonus === 'x2') {
        this.setBonus2(state);

        if (state) {
          this.setBonus3(false);
          document.querySelector('input[id=' + this.id + 'x3]').checked = false;
        }
      } else if (bonus === 'x3') {
        this.setBonus3(state);

        if (state) {
          this.setBonus2(false);
          document.querySelector('input[id=' + this.id + 'x2]').checked = false;
        }
      } else if (bonus === '+50') {
        this.setBonusScrabble(state);

        if (state) {
          this.setBonusScrabble(true);
        }
      }

      if (this.bonus2) {
        this.sum *= 2;
      } else if (this.bonus3) {
        this.sum *= 3;
      } else if (!this.bonus2 && !this.bonus3) {
        this.sum *= 1;
      }

      if (this.bonusScrabble) {
        this.sum += 50;
      }
    }
  }]);

  return Word;
}();



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ "./src/scss/styles.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Word__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Word */ "./src/js/Word.js");
/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameBoard */ "./src/js/GameBoard.js");
/* harmony import */ var _Letter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Letter */ "./src/js/Letter.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Player */ "./src/js/Player.js");






window.addEventListener('load', function () {
  var board = new _GameBoard__WEBPACK_IMPORTED_MODULE_2__["default"](),
      addWordForm = document.querySelector('#addWord'),
      addPlayerForm = document.querySelector('#addPlayer'),
      startGameBtn = document.querySelector('#startGame'),
      savePlayers = document.querySelector('#savePlayers'),
      passButton = document.querySelector('#pass'),
      sumButton = document.querySelector('#addSum'),
      endGameButton = document.querySelector('#endGame');
  passButton.addEventListener('click', function () {
    board.addPlayerScore();
    board.switchTurn();
  });
  addWordForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var text = this.elements.word.value.trim().toLowerCase();

    if (!/^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]{1,20}$/.test(text)) {
      return;
    } else {
      board.displayWord(document.querySelector('.board__word'), board.addWord(text));
      this.reset();
    }
  });
  addPlayerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var playersNumber = board.getPlayers().length;
    var newPlayer = board.addPlayer(this.elements.player.value);
    board.displayPlayer(document.querySelector('.scores thead tr'), newPlayer);
    this.reset();

    if (playersNumber >= 1) {
      savePlayers.removeAttribute('disabled');
    }

    if (playersNumber >= 3) {
      addPlayerForm.classList.toggle('add-players--showed');
      board.initializeGame();
    }
  });
  savePlayers.addEventListener('click', function (event) {
    addPlayerForm.classList.toggle('add-players--showed');
    board.initializeGame();
  });
  startGameBtn.addEventListener('click', function (event) {
    event.preventDefault();
    savePlayers.setAttribute('disabled', 'disabled');
    board.resetGame();
    document.querySelector('.players').innerHTML = "\n                <thead>\n                    <tr></tr>\n                </thead>\n                <tbody></tbody>\n                <tfoot>\n                    <tr></tr>\n                </tfoot>\n            ";
    addPlayerForm.classList.toggle('add-players--showed');
  });
  sumButton.addEventListener('click', function (event) {
    board.addPlayerScore();
    board.displayPlayerSummary();
    board.switchTurn();
    board.clearBoard();
  });
  endGameButton.addEventListener('click', board.endGame.bind(board));
}, false);

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map