$(function () {
    var textdata;
    $("#run").click(function(){
        textdata = $("#data").text();
        alert(textdata);
        $("#result").html("");
        $("#result").qrcode({text: textdata});
    });
});
