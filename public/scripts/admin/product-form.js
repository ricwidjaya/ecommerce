(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// const api = require('../../api')
let currentFileList = []
addFileListener()

function addFileListener() {
  const input = document.querySelector('#file-input')
  input.addEventListener('change', event => {
    // Situation 1: 
    // When the number of photos hasn't reached to 5
    // Add more files to the list but not exceed 5
    const fileList = event.target.files
    if (currentFileList.length + fileList.length <= 5) {
      // inspect duplicate files
      for (let i = 0; i < fileList.length; i++) {
        for (let j = 0; j < currentFileList.length; j++) {
          if (fileList[i].name === currentFileList[j].name) {
            return window.alert(`${fileList[i].name} has selected.`)
          }
        }
      }

      // Combine new list to current one
      currentFileList = [...currentFileList, ...fileList]

      // Update preview images

    } else {
      return window.alert('You can only upload 5 photo for single product.')
    }
  })
}

},{}]},{},[1]);
