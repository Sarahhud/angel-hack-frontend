(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const allAcceptButtons = document.querySelectorAll('.buttons-acc')
const allDeclineButtons = document.querySelectorAll('.buttons-decline')

const acceptBtns = Array.from(allAcceptButtons)
const declineBtns = Array.from(allDeclineButtons)

acceptBtns.map(el => {
    el.addEventListener('click', function () {
        console.log('Hello')
    })
})

declineBtns.map(el => {
    el.addEventListener('click', function () {
        console.log('Hello')
    })
})

},{}]},{},[1]);
