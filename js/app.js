


import BoardUI from './classes/boardui.js';


window.addEventListener('load', () => {
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
  }
  
  const boardUI = new BoardUI();
  boardUI.start();
})

