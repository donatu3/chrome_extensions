$(function () {
    var options = {"username":null,"count":null};
    chrome.storage.local.get("ex17_options", function (value) {
        if(value.ex17_options){
            $("#username").val(value.ex17_options.username);
            $("#count").val(value.ex17_options.count);
        }
    });
    $('#setting').click(function(){
        options.username = $("#username").val();
        options.count = $("#count").val();
        console.log(options);
        chrome.storage.local.set({'ex17_options': options});
    });
});