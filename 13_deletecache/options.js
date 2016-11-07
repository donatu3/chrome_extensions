$(function () {
    chrome.storage.local.get("ex13_time", function (value) {
        if(value.ex13_time){
            $('input[name="time"]:eq('+value.ex13_time+')').prop('checked', true);
        }
    });
    
    $( 'input[name="time"]:radio' ).change( function() {
        chrome.storage.local.set({'ex13_time': $(this).val()});
    });  
});