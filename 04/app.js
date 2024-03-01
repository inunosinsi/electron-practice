//const { ipcRenderer } = require('electron');

const button = document.getElementById("button");
const text = document.getElementById("text");

button.addEventListener("click", async () => {
	//text.textContent = await ipcRenderer.invoke('open-dialog')
	//text.textContent = await window.openDialog();
	text.textContent = await window.myAPI.openDialog();
})
