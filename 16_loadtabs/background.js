chrome.browserAction.onClicked.addListener(
    function(tab){
        chrome.storage.local.get("ex16_urls", function (value) {
            if(value.ex16_urls){
                var url_list = value.ex16_urls;
                if(url_list.length >= 1){
                    for(var i=0; i < url_list.length; i++){
                        chrome.tabs.create({
                            active: false,
                            url: url_list[i]
                        });
                    }
                }else{
                    alert("タブが登録されていません");
                }
            }else{
                alert("オプションからタブを登録してください");
            }
        });
    }
);
