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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\PROJEKTY 2019\\scrabble-counter\\src\\js\\index.js: Unexpected token, expected \";\" (158:39)\n\n\u001b[0m \u001b[90m 156 | \u001b[39m                \u001b[36mif\u001b[39m(bonus \u001b[33m===\u001b[39m \u001b[32m'x2'\u001b[39m){\u001b[0m\n\u001b[0m \u001b[90m 157 | \u001b[39m                    letter\u001b[33m.\u001b[39msetBonus2(event\u001b[33m.\u001b[39mtarget\u001b[33m.\u001b[39mchecked)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 158 | \u001b[39m                } \u001b[36melse\u001b[39m (bonus \u001b[33m===\u001b[39m \u001b[32m'x3'\u001b[39m){\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                                       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 159 | \u001b[39m                    letter\u001b[33m.\u001b[39msetBonus3(event\u001b[33m.\u001b[39mtarget\u001b[33m.\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 160 | \u001b[39m                }\u001b[0m\n\u001b[0m \u001b[90m 161 | \u001b[39m\u001b[0m\n    at Parser.raise (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:6325:17)\n    at Parser.unexpected (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:7642:16)\n    at Parser.semicolon (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:7624:40)\n    at Parser.parseExpressionStatement (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:10364:10)\n    at Parser.parseStatementContent (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:9963:19)\n    at Parser.parseStatement (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:9829:17)\n    at Parser.parseIfStatement (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:10184:51)\n    at Parser.parseStatementContent (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:9874:21)\n    at Parser.parseStatement (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:9829:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:10405:25)\n    at Parser.parseBlockBody (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:10392:10)\n    at Parser.parseBlock (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:10376:10)\n    at Parser.parseFunctionBody (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:9424:24)\n    at Parser.parseArrowExpression (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:9365:10)\n    at Parser.parseParenAndDistinguishExpression (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:9002:12)\n    at Parser.parseExprAtom (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:8762:21)\n    at Parser.parseExprSubscripts (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:8412:23)\n    at Parser.parseMaybeUnary (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:8392:21)\n    at Parser.parseExprOps (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:8267:23)\n    at Parser.parseMaybeConditional (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:8240:23)\n    at Parser.parseMaybeAssign (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:8187:21)\n    at Parser.parseExprListItem (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:9491:18)\n    at Parser.parseCallExpressionArguments (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:8621:22)\n    at Parser.parseSubscript (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:8514:29)\n    at Parser.parseSubscripts (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:8433:19)\n    at Parser.parseExprSubscripts (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:8422:17)\n    at Parser.parseMaybeUnary (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:8392:21)\n    at Parser.parseExprOps (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:8267:23)\n    at Parser.parseMaybeConditional (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:8240:23)\n    at Parser.parseMaybeAssign (C:\\PROJEKTY 2019\\scrabble-counter\\node_modules\\@babel\\parser\\lib\\index.js:8187:21)");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map