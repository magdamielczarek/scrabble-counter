!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/scrabble-counter/",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=[{char:"a",value:1},{char:"ą",value:5},{char:"b",value:3},{char:"c",value:2},{char:"ć",value:6},{char:"d",value:2},{char:"e",value:1},{char:"ę",value:5},{char:"f",value:5},{char:"g",value:3},{char:"h",value:3},{char:"i",value:1},{char:"j",value:3},{char:"k",value:2},{char:"l",value:2},{char:"ł",value:3},{char:"m",value:2},{char:"n",value:1},{char:"ń",value:7},{char:"o",value:1},{char:"ó",value:5},{char:"p",value:2},{char:"r",value:1},{char:"s",value:1},{char:"ś",value:5},{char:"t",value:2},{char:"u",value:3},{char:"w",value:1},{char:"y",value:2},{char:"z",value:1},{char:"ź",value:9},{char:"ż",value:5}],o=function(){function e(t,n){var r=this,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.id="id"+Math.random().toString(36).substr(2,16),this.char=t,this.pointBase=a.filter(function(e){return e.char===r.char})[0].value,this.points=a.filter(function(e){return e.char===r.char})[0].value,this.bonus2=o,this.bonus3=i}var t,n,o;return t=e,(n=[{key:"setBonus2",value:function(e){this.bonus2=e}},{key:"setBonus3",value:function(e){this.bonus3=e}},{key:"updatePoints",value:function(e,t){"x2"===e?(this.setBonus2(t),t&&(this.setBonus3(!1),document.querySelector("input[id="+this.id+"x3]").checked=!1)):"x3"===e&&(this.setBonus3(t),t&&(this.setBonus2(!1),document.querySelector("input[id="+this.id+"x2]").checked=!1)),this.bonus2?this.points=2*this.pointBase:this.bonus3?this.points=3*this.pointBase:this.bonus2||this.bonus3||(this.points=this.pointBase)}}])&&r(t.prototype,n),o&&r(t,o),e}();function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2];var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.id="id"+Math.random().toString(36).substr(2,16),this.value=t,this.letters=i(t).map(function(e){return new o(e)}),this.bonus2=n,this.bonus3=r,this.bonusScrabble=a,this.pointBase=s,this.sum=u}var t,n,r;return t=e,(n=[{key:"getLetters",value:function(){return this.letters}},{key:"setSum",value:function(){this.sum=this.letters.reduce(function(e,t){return e+t.points},0)}},{key:"getSum",value:function(){return this.sum}},{key:"displaySum",value:function(e){e.textContent=this.getSum()}},{key:"setBonus2",value:function(e){this.bonus2=e}},{key:"setBonus3",value:function(e){this.bonus3=e}},{key:"setBonusScrabble",value:function(e){this.bonusScrabble=e}},{key:"updatePoints",value:function(e,t){"x2"===e?(this.setBonus2(t),t&&(this.setBonus3(!1),document.querySelector("input[id="+this.id+"x3]").checked=!1)):"x3"===e?(this.setBonus3(t),t&&(this.setBonus2(!1),document.querySelector("input[id="+this.id+"x2]").checked=!1)):"+50"===e&&(this.setBonusScrabble(t),t&&this.setBonusScrabble(!0)),this.bonus2?this.sum*=2:this.bonus3?this.sum*=3:this.bonus2||this.bonus3||(this.sum*=1),this.bonusScrabble&&(this.sum+=50)}}])&&u(t.prototype,n),r&&u(t,r),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.id=t,this.name=n,this.score=r,this.isActive=a}var t,n,r;return t=e,(n=[{key:"addScore",value:function(e){this.score.push(e)}},{key:"getSum",value:function(){return this.score.reduce(function(e,t){return e+t})}}])&&c(t.prototype,n),r&&c(t,r),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.players=t,this.activePlayer=n,this.words=r,this.currentSum=a}var t,n,r;return t=e,(n=[{key:"addPlayer",value:function(e){var t=new d(this.players.length,e||this.players.length+1);return this.players.push(t),t}},{key:"displayPlayer",value:function(e,t){var n=document.createElement("th");n.textContent=t.name,e.insertAdjacentElement("beforeend",n)}},{key:"getPlayers",value:function(){return this.players}},{key:"clearBoard",value:function(){this.words=[],this.currentSum=0,document.querySelector(".board__word").innerHTML="",document.querySelector(".board__summary__score span").textContent="0"}},{key:"initializeGame",value:function(){this.activePlayer=this.players[0].id,document.querySelector(".player-name").innerText=this.players[this.activePlayer].name,document.querySelectorAll("button:not(#addSum)").forEach(function(e){e.removeAttribute("disabled")}),document.querySelectorAll("input").forEach(function(e){e.removeAttribute("disabled")}),this.addScoresRow();for(var e=0;e<this.getPlayers().length;e++)document.querySelector("tfoot tr").insertAdjacentHTML("beforeend","<td>0</td>");document.querySelector("#endGame").classList.toggle("endGame")}},{key:"addWord",value:function(e){var t=new s(e);return this.words.push(t),t}},{key:"displayWord",value:function(e,t){var n=this,r=document.createElement("div");r.classList.add("letters-container"),r.setAttribute("id",t.id+"container"),r.innerHTML="",e.insertAdjacentElement("beforeend",r),t.getLetters().map(function(e){var t='\n                    <span class="letter">'.concat(e.char,'<span class="letter__score">').concat(e.points,"</span></span>\n                    <form id=").concat(e.id,' class="bonus">\n                        <div class="bonus__container">\n                            <input id=').concat(e.id,"x2 name=").concat(e.id,' data-letter-bonus="x2" data-letter-id=').concat(e.id,' type="checkbox">\n                            <label for=').concat(e.id,'x2 class="bonus__button bonus__button--x2">x2</label>\n                        </div>\n                        <div class="bonus__container">\n                            <input id=').concat(e.id,"x3 name=").concat(e.id,' data-letter-bonus="x3" data-letter-id=').concat(e.id,' type="checkbox">\n                            <label for=').concat(e.id,'x3 class="bonus__button bonus__button--x3">x3</label>\n                        </div>\n                    </form>\n            '),n=document.createElement("div");n.classList.add("letter-group"),n.innerHTML=t,r.insertAdjacentElement("beforeend",n),document.querySelector("#addSum").removeAttribute("disabled")}),r.innerHTML+='<div class="word-bonus">\n                <button class="delete-word-btn"><img src="/assets/delete.svg"/></button>\n                <div class="bonus__container">\n                     <input id='.concat(t.id,'x2 data-word-bonus="x2" data-word-id=').concat(t.id,' type="checkbox">\n                     <label for=').concat(t.id,'x2 class="bonus__button bonus__button--x2word">x2</label>\n                </div>\n                <div class="bonus__container">\n                     <input id=').concat(t.id,'x3 data-word-bonus="x3" data-word-id=').concat(t.id,' type="checkbox">\n                     <label for=').concat(t.id,'x3 class="bonus__button bonus__button--x3word">x3</label>\n                </div>\n                <div class="bonus__container">\n                      <input id=').concat(t.id,'+50 data-word-bonus="+50" data-word-id=').concat(t.id,' type="checkbox">\n                      <label for=').concat(t.id,'+50 class="bonus__button bonus__button--scrabble">scrabble</label>\n                </div>\n                <div class="word-sum" data-word-id=').concat(t.id,"></div>\n            </div>"),t.setSum(),t.updatePoints(),t.displaySum(document.querySelector(".word-sum[data-word-id="+t.id+"]")),this.getSum(),this.displaySum(document.querySelector(".board__summary__score > span"));var a=document.querySelectorAll("[data-letter-bonus]"),o=document.querySelectorAll("input[data-word-id="+t.id+"]");a.forEach(function(e){e.addEventListener("change",function(e){var r=e.target.getAttribute("data-letter-id"),a=e.target.getAttribute("data-letter-bonus");t.letters.find(function(e){return e.id===r}).updatePoints(a,e.target.checked),t.setSum(),t.updatePoints(),t.displaySum(document.querySelector(".word-sum[data-word-id="+t.id+"]")),n.getSum(),n.displaySum(document.querySelector(".board__summary__score > span"))})}),o.forEach(function(e){e.addEventListener("click",function(e){e.target.getAttribute("data-word-id");var r=e.target.getAttribute("data-word-bonus");t.setSum(),t.updatePoints(r,e.target.checked),t.displaySum(document.querySelector(".word-sum[data-word-id="+t.id+"]")),n.displaySum(document.querySelector(".board__summary__score > span"))})}),document.querySelector("#"+t.id+"container .delete-word-btn").addEventListener("click",function(){n.removeWord(t.id),n.getSum(),n.displaySum(document.querySelector(".board__summary__score > span"))})}},{key:"removeWord",value:function(e){var t=this.words.findIndex(function(t){return t.id===e}),n=document.getElementById(e+"container");console.log(n),this.words.splice(t,1),document.querySelector(".board__word").removeChild(n),this.words.length||document.querySelector("#addSum").setAttribute("disabled",!0)}},{key:"switchTurn",value:function(){this.activePlayer=this.activePlayer+1,this.activePlayer===this.getPlayers().length&&(this.activePlayer=0,this.addScoresRow()),document.querySelector(".player-name").innerText=this.players[this.activePlayer].name}},{key:"addScoresRow",value:function(){for(var e=document.createElement("tr"),t=0;t<this.getPlayers().length;t++)e.insertAdjacentHTML("beforeend","<td></td>");document.querySelector(".players tbody").insertAdjacentElement("beforeend",e)}},{key:"pass",value:function(){this.currentSum=0,this.switchTurn(),this.clearBoard()}},{key:"resetGame",value:function(){this.clearBoard(),this.players=[],this.activePlayer=0,document.querySelector(".player-name").textContent="",document.querySelectorAll("main button, #word").forEach(function(e){e.setAttribute("disabled",!0)}),document.getElementById("endGame").classList.add("endGame")}},{key:"getSum",value:function(){return this.words.reduce(function(e,t){return e+t.getSum()},0)}},{key:"displaySum",value:function(e){var t=this.getSum();this.currentSum=t,e.textContent=t}},{key:"addPlayerScore",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentSum;this.players[this.activePlayer].addScore(e),document.querySelector(".scores tbody tr:last-of-type td:nth-of-type("+Number(this.activePlayer+1)+")").textContent=e,document.querySelector("#addSum").setAttribute("disabled",!0)}},{key:"displayPlayerSummary",value:function(){var e=this.players[this.activePlayer].getSum();document.querySelector(".scores tfoot tr td:nth-of-type("+Number(this.activePlayer+1)+")").textContent=e}},{key:"endGame",value:function(){var e=this,t=[];this.getPlayers().forEach(function(e){t.push(e.getSum())});var n=Math.max.apply(Math,t);t.reduce(function(e,t,r){return t===n?e.concat(r):e},[]).forEach(function(t){document.querySelector(".board__word").innerHTML='<p class="result-info">🏆🏆🏆 <br/> wygrywa <strong>'.concat(e.getPlayers()[t].name,"</strong><br/>").concat(n," punktów</p>")}),document.getElementById("endGame").classList.add("endGame")}}])&&l(t.prototype,n),r&&l(t,r),e}();window.addEventListener("load",function(){var e=new h,t=document.querySelector("#addWord"),n=document.querySelector("#addPlayer"),r=document.querySelector("#startGame"),a=document.querySelector("#savePlayers"),o=document.querySelector("#pass"),i=document.querySelector("#addSum"),u=document.querySelector("#endGame");o.addEventListener("click",function(){e.addPlayerScore(),e.switchTurn()}),t.addEventListener("submit",function(t){t.preventDefault();var n=this.elements.word.value.trim().toLowerCase();/^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]{1,20}$/.test(n)&&(e.displayWord(document.querySelector(".board__word"),e.addWord(n)),this.reset())}),n.addEventListener("submit",function(t){t.preventDefault();var r=e.getPlayers().length,o=e.addPlayer(this.elements.player.value);e.displayPlayer(document.querySelector(".scores thead tr"),o),this.reset(),r>=1&&a.removeAttribute("disabled"),r>=3&&(n.classList.toggle("add-players--showed"),e.initializeGame())}),a.addEventListener("click",function(t){n.classList.toggle("add-players--showed"),e.initializeGame()}),r.addEventListener("click",function(t){t.preventDefault(),a.setAttribute("disabled","disabled"),e.resetGame(),document.querySelector(".players").innerHTML="\n                <thead>\n                    <tr></tr>\n                </thead>\n                <tbody></tbody>\n                <tfoot>\n                    <tr></tr>\n                </tfoot>\n            ",n.classList.toggle("add-players--showed")}),i.addEventListener("click",function(t){e.addPlayerScore(),e.displayPlayerSummary(),e.switchTurn(),e.clearBoard()}),u.addEventListener("click",e.endGame.bind(e))},!1)}]);
//# sourceMappingURL=bundle.js.map