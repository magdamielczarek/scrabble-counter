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

var Letter =
/*#__PURE__*/
function () {
  function Letter(_char, points) {
    var bonus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Letter);

    this["char"] = _char;
    this.points = points;
    this.bonus = bonus;
  }

  _createClass(Letter, [{
    key: "setBonus",
    value: function setBonus(bonus) {
      this.bonus = bonus;
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

var Player = function Player(name, score) {
  _classCallCheck(this, Player);

  this.name = name;
  this.score = score;
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

var Word =
/*#__PURE__*/
function () {
  function Word(value) {
    var letters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var bonuses = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var sum = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Word);

    this.value = value;
    this.letters = _toConsumableArray(value).map(function (letter) {
      return new _Letter__WEBPACK_IMPORTED_MODULE_0__["default"](letter, punctation.filter(function (punct) {
        return punct["char"] === letter;
      })[0].value);
    });
    this.bonuses = bonuses;
    this.sum = sum;
  }

  _createClass(Word, [{
    key: "getLetters",
    value: function getLetters() {
      return this.letters;
    }
  }, {
    key: "getSum",
    value: function getSum() {}
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
  var board = new GameBoard();
  var addWordForm = document.querySelector('#addWord');
  var addPlayerForm = document.querySelector('#addPlayer');
  var startGameBtn = document.querySelector('#startGame');
  var savePlayers = document.querySelector('#savePlayers');
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
    }
  });
  savePlayers.addEventListener('click', function (event) {
    addPlayerForm.classList.toggle('add-players--showed');
  });
  startGameBtn.addEventListener('click', function (event) {
    event.preventDefault();
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
    this.gameStatus = false;
  }

  _createClass(GameBoard, [{
    key: "addPlayer",
    value: function addPlayer(name) {
      var player = new _Player__WEBPACK_IMPORTED_MODULE_4__["default"](name || this.players.length + 1, 0);
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
        var template = "\n                    <span class=\"letter\">".concat(letter["char"], "<span class=\"letter__score\">").concat(letter.points, "</span></span>\n                    <div class=\"bonus\">\n                        <button class=\"bonus__button bonus__button--x2\">x2</button>\n                        <button class=\"bonus__button bonus__button--x3\">x3</button>\n                    </div>\n            ");
        var letterGroup = document.createElement('div');
        letterGroup.classList.add('letter-group');
        letterGroup.innerHTML = template;
        wordElement.insertAdjacentElement('beforeend', letterGroup);
      });
      wordElement.innerHTML += "<div class=\"word-bonus\">\n                <button class=\"bonus__button bonus__button--x2word\">x3</button>\n                <button class=\"bonus__button bonus__button--x3word\">x4</button>\n                <button class=\"bonus__button bonus__button--scrabble\">scrabble</button>\n            </div>";
    }
  }, {
    key: "removeWord",
    value: function removeWord(id) {}
  }, {
    key: "switchTurn",
    value: function switchTurn(activePlayer) {
      this.activePlayer++;
      console.log(this.activePlayer);
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