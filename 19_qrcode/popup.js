$(function () {
    var textdata;
    $("#run").click(function(){
        textdata = $("#text").val();
        $("#result").html("");
        $("#result").qrcode({
            width:100,
            height:100,
            text: textdata
        });
    });
});
