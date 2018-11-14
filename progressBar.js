
function increaseProgress(event) {
	event.currentTarget.onchange = null;
	//window.alert(event.currentTarget.parentNode.nodeName);
	console.info("info");
	console.log("log");
	console.warn("warn");
	console.error("error");
	document.getElementById('progress').value++;
}
