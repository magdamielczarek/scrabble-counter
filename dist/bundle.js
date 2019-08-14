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

/***/ "./src/js/GameBoard.js":
/*!*****************************!*\
  !*** ./src/js/GameBoard.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Word__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Word */ "./src/js/Word.js");


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

    var bonus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var bonus2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var bonus3 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    _classCallCheck(this, Letter);

    this.id = Math.random().toString(36).substr(2, 16);
    this["char"] = _char;
    this.points = punctation.filter(function (punct) {
      return punct["char"] === _this["char"];
    })[0].value;
    this.bonus = bonus;
    this.bonus2 = bonus2;
    this.bonus3 = bonus3;
  }

  _createClass(Letter, [{
    key: "setBonus",
    value: function setBonus(bonus) {
      this.bonus = bonus;
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
    key: "updatePoints",
    value: function updatePoints(bonus, state) {
      var _this2 = this;

      if (bonus === 'x2') {
        this.bonus2 = state;
        this.bonus3 = false;
      } else if (bonus === 'x3') {
        this.bonus2 = false;
        this.bonus3 = state;
      }

      if (this.bonus2) {
        this.points *= 2;
      } else if (this.bonus3) {
        this.points *= 3;
      } else if (!this.bonus2 && !this.bonus3) {
        this.points = punctation.filter(function (punct) {
          return punct["char"] === _this2["char"];
        })[0].value;
      }

      console.log(this.points);
    }
  }, {
    key: "getBonus",
    value: function getBonus(bonus) {
      return this.bonus;
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

var Player = function Player(id, name) {
  var score = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var isActive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  _classCallCheck(this, Player);

  this.id = id;
  this.name = name;
  this.score = score;
  this.isActive = isActive;
};



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

    _classCallCheck(this, Word);

    this.id = Math.random().toString(36).substr(2, 16);
    this.value = value;
    this.letters = _toConsumableArray(value).map(function (letter) {
      return new _Letter__WEBPACK_IMPORTED_MODULE_0__["default"](letter);
    });
    this.bonus2 = bonus2;
    this.bonus3 = bonus3;
    this.bonusScrabble = bonusScrabble;
    this.sum = sum;
  }

  _createClass(Word, [{
    key: "getLetters",
    value: function getLetters() {
      return this.letters;
    }
  }, {
    key: "getSum",
    value: function getSum() {
      return this.letters.reduce(function (acc, curr) {
        return acc + curr.points;
      }, 0);
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








window.addEventListener('load', function () {
  var board = new GameBoard(),
      addWordForm = document.querySelector('#addWord'),
      addPlayerForm = document.querySelector('#addPlayer'),
      startGameBtn = document.querySelector('#startGame'),
      savePlayers = document.querySelector('#savePlayers'),
      passButton = document.querySelector('#pass'),
      sumButton = document.querySelector('#addSum');
  passButton.addEventListener('click', function () {
    return board.switchTurn();
  });
  sumButton.addEventListener('click', function () {
    board.switchTurn();
  });
  addWordForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (this.elements.word.value === '') {
      return;
    } else {
      board.addWord(this.elements.word.value.toLowerCase());
    }
  });
  addPlayerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var playersNumber = board.getPlayers().length;
    board.addPlayer(this.elements.player.value);
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
    board.clearBoard();
    document.querySelector('.players').innerHTML = "\n                <thead>\n                    <tr></tr>\n                </thead>\n                <tbody></tbody>\n                <tfoot>\n                    <tr></tr>\n                </tfoot>\n            ";
    addPlayerForm.classList.toggle('add-players--showed');
  });
}, false);

var GameBoard =
/*#__PURE__*/
function () {
  function GameBoard() {
    var players = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var activePlayer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var words = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, GameBoard);

    this.players = players;
    this.activePlayer = activePlayer;
    this.words = words;
    this.points = 0;
  }

  _createClass(GameBoard, [{
    key: "addPlayer",
    value: function addPlayer(name) {
      var player = new _Player__WEBPACK_IMPORTED_MODULE_4__["default"](this.players.length, name || this.players.length + 1, 0);
      var playerElement = document.createElement('th');
      playerElement.textContent = "".concat(player.name);
      this.players.push(player);
      document.querySelector('.scores thead tr').insertAdjacentElement('beforeend', playerElement);
    }
  }, {
    key: "getPlayers",
    value: function getPlayers() {
      return this.players;
    }
  }, {
    key: "clearBoard",
    value: function clearBoard() {
      this.players = [];
      this.words = [];
      this.points = 0;
      this.activePlayer = undefined;
    }
  }, {
    key: "addWord",
    value: function addWord(value) {
      var word = new _Word__WEBPACK_IMPORTED_MODULE_1__["default"](value);
      var wordElement = document.createElement('div');
      wordElement.classList.add('letters-container');
      wordElement.innerHTML = "";
      document.querySelector('.board__word').insertAdjacentElement('beforeend', wordElement);
      this.words.push(word);
      word.getLetters().map(function (letter) {
        var template = "\n                    <span class=\"letter\">".concat(letter["char"], "<span class=\"letter__score\">").concat(letter.points, "</span></span>\n                    <div class=\"bonus\">\n                        <div class=\"bonus__container\">\n                            <input id=").concat(letter.id, "x2 name=").concat(letter.id, " data-letter-bonus=\"x2\" data-letter-id=").concat(letter.id, " type=\"checkbox\">\n                            <label for=").concat(letter.id, "x2 class=\"bonus__button bonus__button--x2\">x2</label>\n                        </div>\n                        <div class=\"bonus__container\">\n                            <input id=").concat(letter.id, "x3 name=").concat(letter.id, " data-letter-bonus=\"x3\" data-letter-id=").concat(letter.id, " type=\"checkbox\">\n                            <label for=").concat(letter.id, "x3 class=\"bonus__button bonus__button--x3\">x3</label>\n                        </div>\n                    </div>\n            ");
        var letterGroup = document.createElement('div');
        letterGroup.classList.add('letter-group');
        letterGroup.innerHTML = template;
        wordElement.insertAdjacentElement('beforeend', letterGroup);
      });
      wordElement.innerHTML += "<div class=\"word-bonus\">\n                <div class=\"bonus__container\">\n                     <input id=".concat(word.id, "x2 name=").concat(word.id, " data-word-bonus=\"x2\" data-word-id=").concat(word.id, " type=\"checkbox\">\n                     <label for=").concat(word.id, "x2 class=\"bonus__button bonus__button--x2word\">x2</label>\n                </div>\n                <div class=\"bonus__container\">\n                     <input id=").concat(word.id, "x3 name=").concat(word.id, " data-word-bonus=\"x3\" data-word-id=").concat(word.id, " type=\"checkbox\">\n                     <label for=").concat(word.id, "x3 class=\"bonus__button bonus__button--x3word\">x3</label>\n                </div>\n                <div class=\"bonus__container\">\n                      <input id=").concat(word.id, "+50 name=").concat(word.id, " data-word-bonus=\"+50\" data-word-id=").concat(word.id, " type=\"checkbox\">\n                      <label for=").concat(word.id, "+50 class=\"bonus__button bonus__button--scrabble\">scrabble</label>\n                </div>\n                <div class=\"word-sum\" data-word-id=\"").concat(word.id, "\"></div>\n            </div>");
      word.getSum();
      var bonusLetterBtns = document.querySelectorAll('[data-letter-bonus]');
      var bonusWordBtns = document.querySelectorAll('[data-word-id] ~ input');
      bonusLetterBtns.forEach(function (btn) {
        btn.addEventListener('change', function (event) {
          var letterId = event.target.getAttribute('data-letter-id');
          var bonus = event.target.getAttribute('data-letter-bonus');
          var thisLetter = word.letters.find(function (letter) {
            return letter.id === letterId;
          });
          thisLetter.updatePoints(bonus, btn.checked);
          word.getSum();
          document.querySelector('.word-sum[data-word-id]').textContent = word.getSum();
        });
      });
      bonusWordBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {});
      });
      console.log(word.getSum());
    }
  }, {
    key: "removeWord",
    value: function removeWord(id) {}
  }, {
    key: "switchTurn",
    value: function switchTurn() {
      if (this.activePlayer === this.getPlayers().length - 1) {
        this.activePlayer = 0;
      } else {
        this.activePlayer = this.activePlayer + 1;
      }

      document.querySelector('.player-name').innerText = this.players[this.activePlayer].name;
    }
  }, {
    key: "initializeGame",
    value: function initializeGame() {
      this.activePlayer = this.players[0].id;
      document.querySelector('.player-name').innerText = this.players[this.activePlayer].name;
    }
  }, {
    key: "pass",
    value: function pass() {
      this.switchTurn();
    }
  }]);

  return GameBoard;
}();

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