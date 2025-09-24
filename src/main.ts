import { app, BrowserWindow,ipcMain } from 'electron';
import path from 'path';

let win: BrowserWindow | null = null;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('page/index.html');

  win.on('closed', () => {
    win = null;
  });
};

ipcMain.on('open-new-window', (event) => {
  const startWin = new BrowserWindow({ width: 800, height: 600 })
  console.log(path.join(__dirname, 'page/welcome/welcome.html'));
  startWin.loadFile(path.join(__dirname, 'page/welcome/welcome.html'))
})

import { isFirstRun } from './init.js';
if (isFirstRun()) {
  // 执行首次运行逻辑，比如初始化设置、弹窗等
  console.log('Welcome! This is your first run.');
} else {
  // 正常启动流程
  console.log('Welcome back!');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
