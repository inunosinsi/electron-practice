const { app, BrowserWindow } = require('electron');

const createWindow = () => {
	const win = new BrowserWindow({
		width: 600,
		height: 400,
		title: 'マイアプリ'
	})

	win.webContents.openDevTools({ mode: 'detach'})
	win.loadFile('index.html')
}

app.whenReady().then(() => {
	createWindow()
})
