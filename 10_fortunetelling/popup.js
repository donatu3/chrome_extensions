$(function () {
    chrome.storage.local.get("ex10_sign", function (value) {
        if(value.ex10_sign){
            var xhr= new XMLHttpRequest();
            xhr.open("GET","http://donatu33.sakura.ne.jp/api/FortuneTelling/fortunetelling.php?sign="+value.ex10_sign);
            xhr.send();
            xhr.addEventListener("load",function(ev){
                $("#contents").html(xhr.response)
            });
        }else{
            $("#contents").html('<div id="error">オプションから星座を選択してください</div>');
        }
    });
	$("#loading").fadeOut();
	$("#contents").fadeIn();
});
