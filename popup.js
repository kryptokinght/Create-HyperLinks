var copyTextareaBtn = document.querySelector('.js-textareacopybtn');


chrome.extension.onMessage.addListener(function(message, messageSender, sendResponse) {
	var copyTextarea = document.querySelector('.js-copytextarea');
	console.log(message.txt);
	copyTextarea.value += message.txt;
	copyTextareaBtn.addEventListener('click', function(event){
		copyTextToClipboard(message.txt);
		/*try {
			var successful = document.execCommand('copy');
			var msg = successful ? 'successful' : 'unsuccessful';
			console.log('Copying text command was ' + msg);
		} 
		catch (err) {
			console.log('Oops, unable to copy');
		}*/
	});
});
	



function close() {
	console.log("Not working");
}