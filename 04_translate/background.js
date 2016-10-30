chrome.contextMenus.create({
    "title": "「%s」を日本語訳",
    "type": "normal",
    "contexts": ["selection"],
    "onclick": function(info){
        var xhr= new XMLHttpRequest();
        xhr.open("GET","http://donatu33.sakura.ne.jp/api/translate/translate.php?en_text="+info.selectionText);
        xhr.send();
        xhr.addEventListener("load",function(ev){
            alert(xhr.response);
        });
    }
});

