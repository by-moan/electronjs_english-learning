const { app, BrowserWindow, ipcMain} = require('electron')
const path = require('node:path')

function createWindow () {
  const main_win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  ipcMain.on('something', () => {
    alert("func made from main.js");
  });

  main_win.loadFile('index.html')
}

app.whenReady().then(() => {
  ipcMain.on('')
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})