$(function () {
    chrome.tabs.query({active:true}, function(tab) {
        chrome.tabs.sendMessage(tab[0].id, "open", function(response) {
        });
    });    
    chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
        if (request.status == "return"){
            $("#target").append("<img src='"+request.imgpath+"' width='160' height='90'>");
            sendResponse({
            });
        }
    });
});
