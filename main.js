const {app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
var proc = require('child_process').execFile;

function create_win() {
  const main_win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender;
    const win = BrowserWindow.fromWebContents(webContents);
    win.setTitle(title);
  });
  //main_win.loadFile('index.html')
  main_win.menuBarVisible = false;

  //debugs
  main_win.loadURL('http://localhost:5500/index.html');
}

app.whenReady().then(() => {
  create_win();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) create_win();
  })
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
})
