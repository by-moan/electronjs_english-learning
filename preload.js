/*
  Preload
 */

const { contextBridge, ipcRenderer } = require('electron');

document.addEventListener('DOMCONTENTLOADED', () => {
  
});


contextBridge.exposeInMainWorld('thing', {
  func: () => ipcRenderer.send('alert_main')
});
