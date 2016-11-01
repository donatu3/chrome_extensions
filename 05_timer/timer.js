$(function () {

    function start() {
        chrome.runtime.sendMessage({
            status: "start"
        },
        function(response) {
        });
    }

    function stop() {
        chrome.runtime.sendMessage({
            status: "stop"
        },
        function(response) {
            $('#timer').text(response.status);
        });
    }

    function set() {
        chrome.runtime.sendMessage({
            status: "set",
            value: $("#setting").val()
        },
        function(response) {
            $('#timer').text(response.status);
        });
    }
    
    $('#button1').click(function(){
        start();
    });
    $('#button2').click(function(){
        stop();
    });
    $('#button3').click(function(){
        val = $('#setting').val();
        if(val.match(/^[0-9]+$/) && val >= 1){
            set();
        }else{
            alert("1以上の整数で入力してください");
        }
    });
    
    chrome.runtime.onMessage.addListener(
      function(request, sender, sendResponse) {
        if (request.status == "count"){
            $('#timer').text(request.value);
            sendResponse({
            });
        }
    });
    
});
