
function onDeleteAll() {
  alert("履歴を全て削除しました");
}

chrome.browserAction.onClicked.addListener(
    function(tab){
        if(confirm('本当に削除しますか？')){
            chrome.history.deleteAll(onDeleteAll);
        }
    }
);

