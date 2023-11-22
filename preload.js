/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */

const { contextBridge, ipcRenderer } = require('electron');

document.addEventListener('DOMCONTENTLOADED', () => {
  
});


contextBridge.exposeInMainWorld('thing', {
  func: () => ipcRenderer.send('alert_main')
});
