$(function () {
    chrome.storage.local.get("ex14_datas", function (value) {
        if(value.ex14_datas){
            var xhr= new XMLHttpRequest();
            xhr.open("GET","http://donatu33.sakura.ne.jp/api/food/search.php?lat="+value.ex14_datas.lat+"&lng="+value.ex14_datas.lng+"&budget="+value.ex14_datas.budget+"&range="+value.ex14_datas.area);
            xhr.send();
            xhr.addEventListener("load",function(ev){
                $("#contents").html(xhr.response)
            });
        }else{
            $("#contents").html('<div id="error">オプションで情報を設定してください</div>');
        }
    });
	$("#loading").fadeOut();
	$("#contents").fadeIn();
});
