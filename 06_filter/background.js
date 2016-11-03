var isFilter = false;
chrome.browserAction.onClicked.addListener(function(tab) {
    if(isFilter == false){
        chrome.tabs.sendMessage(tab.id, "add_filter");
        isFilter = true;
    }else{
        chrome.tabs.sendMessage(tab.id, "remove_filter");
        isFilter = false;
    }
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.status == "remove_filter"){
        isFilter = false;
    }    
});