import {app, BrowserWindow} from "electron";

function createBrowserWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 400
    })
    win.loadURL("http://localhost:3000");
}

app.whenReady()
    .then(() => {
        createBrowserWindow();

        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                createBrowserWindow()
            }
        })
    })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})