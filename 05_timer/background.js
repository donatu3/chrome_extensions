
var now = 180;
var TIMER;
function count(){
    if(now <= 0){
        alert("時間になりました");
        clearInterval(TIMER);
    }else if(now == 1){
        now = now - 1;
        alert("時間になりました");
        clearInterval(TIMER);
    }else{
        now = now - 1;
        chrome.runtime.sendMessage({
            status: "count",
            value: now
        },
        function(response) {
        });
    }
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.status == "start"){
        clearInterval(TIMER);
        TIMER = setInterval(function(){count()}, 1000);
        sendResponse({
            status: "作動中"
        });
    }
    if (request.status == "stop"){
        clearInterval(TIMER);
        sendResponse({
            status: "停止中"
        });
    }
    if (request.status == "set"){
        now = request.value;
        sendResponse({
            status: now
        });
    }
    
});
