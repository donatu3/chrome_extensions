chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request == "open"){
        $("img").each(function() {
            chrome.runtime.sendMessage({
                status: "return",
                imgpath: $(this).prop("src"),
            },function(response) {});
        });
    }    
});