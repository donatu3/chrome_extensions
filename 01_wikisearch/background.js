chrome.contextMenus.create({
    "title": "「%s」をwikipediaで検索",
    "type": "normal",
    "contexts": ["selection"],
    "onclick": function(info){
        var url = 'https://ja.wikipedia.org/wiki/' + encodeURIComponent(info.selectionText);
        chrome.tabs.create({
            url: url
        });
    }
});