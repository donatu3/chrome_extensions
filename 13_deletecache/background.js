function callback(tab){
    chrome.browserAction.setBadgeText({text:"ok"});
    setTimeout(function(){
        chrome.browserAction.setBadgeText({text:""});
	},1000);
};

chrome.browserAction.onClicked.addListener(
    function(tab){
        if(confirm('本当に削除しますか？')){
            chrome.storage.local.get("ex13_time", function (value) {
                if(value.ex13_time){
                    var time;
                    if(value.ex13_time == 0){
                        time = (new Date()).getTime();
                    }else if(value.ex13_time == 1){
                        time = 1000 * 60 * 60 * 24 * 7;
                    }else if(value.ex13_time == 2){
                        time = 1000 * 60 * 60 * 24;
                    }else if(value.ex13_time == 3){
                        time = 1000 * 60 * 60;
                    }
                    var ago = (new Date()).getTime() - time;
                    chrome.browsingData.remove({
                        "since": ago
                    }, {
                        "appcache": true,
                        "cache": true,
                        "cookies": false,
                        "downloads": false,
                        "fileSystems": false,
                        "formData": false,
                        "history": false,
                        "indexedDB": false,
                        "localStorage": false,
                        "pluginData": false,
                        "passwords": false,
                        "webSQL": false
                    }, callback(tab));
                }else{
                    alert("オプションから期間を設定してください");
                }
            });

        }
    }
);


      

