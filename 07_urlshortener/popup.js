$(function () {
    $("#shortener_button").on("click",function(){
        var xhr= new XMLHttpRequest();
        xhr.open("GET","http://donatu33.sakura.ne.jp/api/urlshortener/url.php?url="+encodeURIComponent($("#longurl").val()));
        xhr.send();
        xhr.addEventListener("load",function(ev){
            $("#shorturl").val(xhr.response)
        });
    });
});
