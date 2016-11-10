function saveToClipboard(str) {
    var textArea = document.createElement("textarea");
    textArea.style.cssText = "position:absolute;left:-100%";
    document.body.appendChild(textArea);
    textArea.value = str;
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}

chrome.commands.onCommand.addListener(function(command) {
    if(command == "copyUrl"){
        chrome.tabs.query({active: true},function(tabs){
            var tab = tabs[0];
            saveToClipboard(tab.url);
        });
    }
});
      