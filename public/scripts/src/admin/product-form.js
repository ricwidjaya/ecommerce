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
