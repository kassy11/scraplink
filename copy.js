chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
	  copy();
	}
});

copy(){
  var text = '['+document.title.replace(/\s*[\[\]]\s*/g,' ')+' '+location.href+']';
  navigator.clipboard.writeText(text).then(
    ()=>alert("Copied!"),
    ()=>alert("Error!")
  );
};
