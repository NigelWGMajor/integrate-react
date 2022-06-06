const { app, BrowserWindow } = require("electron");
let win;
function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600 });
  
  if (process.env.DEBUG) {
     win.loadURL(`http://172.0.0.1:3000`);
  }
  
  win.loadURL(`file://${__dirname}/build/index.html`);
    
  win.on("closed", () => {
    win = null;
  });
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
