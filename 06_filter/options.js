$(function () {
    chrome.storage.local.get("ex6_filter", function (value) {
        if(value.ex6_filter){
            $("#select_level").val(value.ex6_filter);
            $("#preview").css({'background-color':'black','opacity':value.ex6_filter});
        }else{
            $("#select_level").val("0.5");
            $("#preview").css({'background-color':'black','opacity':'0.5'});
        }
    });
    $("#select_level").change(function() {
        var selectVal = $("#select_level").val();
        chrome.storage.local.set({'ex6_filter': selectVal});
        $("#preview").css({'background-color':'black','opacity':selectVal});
    });
});