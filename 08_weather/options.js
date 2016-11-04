$(function () {
    chrome.storage.local.get("ex8_weather", function (value) {
        if(value.ex8_weather){
            $("#cityid").val(value.ex8_weather);
        }
    });
    $('#setting').click(function(){
        var Val = $("#cityid").val();
        alert(Val);
        chrome.storage.local.set({'ex8_weather': Val});
    });
});