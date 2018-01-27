console.log("Create Hyperlink content.js loaded");

chrome.runtime.onMessage.addListener(gotMessage);
//receives a message from background.js with the tab url when the contextMenu is clicked

function gotMessage(message, sender, sendResopnse) {
	console.log("Message received");
	let sel = window.getSelection();
	let id = sel["anchorNode"]["parentElement"]["id"];
	let hyperURL = message.tabURL + "#" + id;
	chrome.runtime.sendMessage({
		from:    'content',
	    subject: 'showPopup',
	  	url: hyperURL
	});
	/*sendResopnse({
		from : 'content',
		subject: 'showPopup',
		url: hyperURL
	});*/
}