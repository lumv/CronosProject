"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { app, BrowserWindow } = require('electron');
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    });
    win.loadFile('index.html');
}
app.whenReady().then(createWindow);
//# sourceMappingURL=main.js.map