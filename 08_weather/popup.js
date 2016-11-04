$(function () {
    chrome.storage.local.get("ex8_weather", function (value) {
        if(value.ex8_weather){
            var xhr= new XMLHttpRequest();
            xhr.open("GET","http://donatu33.sakura.ne.jp/api/weather/weather.php?city_id="+value.ex8_weather);
            xhr.send();
            xhr.addEventListener("load",function(ev){
                $("#contents").html(xhr.response)
            });
        }else{
            $("#contents").html('<div id="error">オプションからIDを指定してください</div>');
        }
    });
	$("#loading").fadeOut();
	$("#contents").fadeIn();
});
