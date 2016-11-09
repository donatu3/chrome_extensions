$(function () {
    var title_list = [];
    var url_list = [];

    chrome.storage.local.get(["ex16_titles","ex16_urls"], function (value) {
        if(value.ex16_titles && value.ex16_urls){
            $("#list").html("タブリスト<br>");
            var titles = value.ex16_titles;
            var urls = value.ex16_urls;
            console.log(titles);
            console.log(urls);
            for (var i = 0; i < titles.length; i++) {
                $("#list").append("[" + i + "]:" + titles[i] + "<br>" + urls[i] + "<br>");
            }
        }
    });
    $('#add').on('click',function(){
        var add_title = $("#title").val();
        var add_url = $("#url").val();
        chrome.storage.local.get(["ex16_titles","ex16_urls"], function (value) {
            if(value.ex16_titles && value.ex16_urls){
                title_list = value.ex16_titles;
                url_list = value.ex16_urls;
            }
                title_list.push(add_title);
                url_list.push(add_url); 
                chrome.storage.local.set({'ex16_titles': title_list});
                chrome.storage.local.set({'ex16_urls': url_list});
        });
        location.reload();
    });
    $('#remove').click(function(){
        chrome.storage.local.get(["ex16_titles","ex16_urls"], function (value) {
            if(value.ex16_titles && value.ex16_urls){
                var Val = $("#deletenum").val();
                title_list = value.ex16_titles;
                url_list = value.ex16_urls;
                title_list.splice( Val, 1 );
                url_list.splice( Val, 1 );
                chrome.storage.local.set({'ex16_titles': title_list});
                chrome.storage.local.set({'ex16_urls': url_list});
                location.reload();
            }else{
                alert("登録されていません")
            }
        });
    });
    $('#alldelete').click(function(){
        if(confirm("本当に削除しますか？")){
            chrome.storage.local.remove(["ex16_titles","ex16_urls"], function(){});
            location.reload();
        }
    });
    $('#addopentabs').click(function(){
        chrome.tabs.getCurrent(function(currenttab){
            chrome.storage.local.set({'ex16_current': currenttab.index});
        });
        chrome.tabs.query({lastFocusedWindow: true},function(tabs){
            chrome.storage.local.get(["ex16_titles","ex16_urls","ex16_current"], function (value) {
                if(value.ex16_titles && value.ex16_urls){
                    title_list = value.ex16_titles;
                    url_list = value.ex16_urls;
                }
                for(var i=0; i < tabs.length; i++){
                    if(i != value.ex16_current){
                        var tab = tabs[i];
                        title_list.push(tab.title);
                        url_list.push(tab.url); 
                    }
                }
                chrome.storage.local.set({'ex16_titles': title_list});
                chrome.storage.local.set({'ex16_urls': url_list});
            });
        });
        location.reload();
    });
});

