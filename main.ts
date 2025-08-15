// main.ts
import { app, BrowserWindow } from 'electron';
import { AppDataSource } from './src/data-source';
import { User } from './src/entity/User';

let mainwindow: BrowserWindow | null = null;

async function createWindow() {
  await AppDataSource.initialize();

  //Crear un usuario de ejemplo
  const userRepo = AppDataSource.getRepository(User);
  const newUser = userRepo.create({ name: "Lucas"});
  await userRepo.save(newUser);

  mainwindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {nodeIntegration: true}
  });

  mainwindow.loadFile("index.html")
}
/**function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });
  win.loadFile('index.html');
}*/

app.whenReady().then(createWindow);
