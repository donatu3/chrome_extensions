$(function () {
    chrome.storage.local.get("ex17_options", function (value) {
        if(value.ex17_options){
            var xhr= new XMLHttpRequest();
            xhr.open("GET","http://donatu33.sakura.ne.jp/api/twitter/tweet.php?username="+value.ex17_options.username+"&count="+value.ex17_options.count);
            xhr.send();
            xhr.addEventListener("load",function(ev){
                $("#contents").html(xhr.response)
            });
        }else{
            $("#contents").html('<div id="error">オプションから設定を行ってください</div>');
        }
    });
	$("#loading").fadeOut();
	$("#contents").fadeIn();
});
