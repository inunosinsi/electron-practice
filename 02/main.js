const { app, BrowserWindow, ipcMain, dialog } = require('electron');

const createWindow = () => {
	const win = new BrowserWindow({
		width: 600,
		height: 400,
		title: 'マイアプリ',
		// webPreferencesでウェブページの機能の設定
		webPreferences: {
			// nodeIntegrationがtrueでレンダラープロセスがNode.jsの機能を利用できる
			nodeIntegration: true,
			// contextIsolationがtrueでメインプロセスとレンダラープロセスのJavaScriptコンテキストを分離する
			contextIsolation: false
		}
	})

	ipcMain.handle('open-dialog', async (_e, _arg) => {
		return dialog
			// ファイル選択ダイアログを表示する
			.showOpenDialog(win, {
				properties: ['openFile'],
			})
			.then((result) => {
				// キャンセルボタンが押された時
				if (result.canceled) return '';

				// 選択されたファイルの絶対パスを返す
				return result.filePaths[0];
			})
			.catch((err) => console.error(err));
	})

	//win.webContents.openDevTools({ mode: 'detach'})
	win.loadFile('index.html')
}

app.whenReady().then(() => {
	createWindow()
})
