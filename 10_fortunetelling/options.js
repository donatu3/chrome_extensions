$(function () {
    chrome.storage.local.get("ex10_sign", function (value) {
        if(value.ex10_sign){
            $("#sign").val(value.ex10_sign);
        }
    });
    $("#sign").change(function() {
        var selectVal = $("#sign").val();
        chrome.storage.local.set({'ex10_sign': selectVal});
    });
});