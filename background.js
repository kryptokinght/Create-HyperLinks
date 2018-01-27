console.log("Create Hyperlink content.js loaded");

function getword(info,tab) {
	console.log("Word " + info.selectionText + " was clicked.");
	//create params for all the active tabs
	let params = {
		active : true,
		currentWindow : true
	};
	//get all the tabs and send message to content_script which is content.js
	chrome.tabs.query(params, function(tabs) {
		let msg = {
			tabURL : tabs[0].url
		}
		//send message to content.js to extract id of the selected text
		chrome.tabs.sendMessage(tabs[0].id, msg);
	});	        
}

//listens for 'selection' event from contextMenu and then executes function getword
chrome.contextMenus.create({
  title: "Create Hyperlink", 
  contexts:["selection"], 
  onclick: getword,
})

//listens for a message from content.js to open popup.html
chrome.runtime.onMessage.addListener(function (msg, sender) {
  // First, validate the message's structure
  if ((msg.from === 'content') && (msg.subject === 'showPopup')) {
    // Open up popup.html inside a new tab
    chrome.tabs.create({url:"popup.html", active:true}, function() {
    	chrome.runtime.sendMessage({txt: msg.url});
    });
  }
});


