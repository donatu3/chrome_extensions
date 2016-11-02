//http://qiita.com/nbkn/items/de6dbe50fa6da66f7f98

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request == "myAction") {
        alert("test");
        $('body').append('<li>追加されました</li>');
    }
}); 
