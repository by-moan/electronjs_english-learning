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

  mainWindow.loadFile('index.html')
  mainWindow.menuBarVisible = false;
  mainWindow.setIcon('./ico.png');
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

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
