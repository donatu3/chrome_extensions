$(function () {
    $("#expand_button").on("click",function(){
        var xhr= new XMLHttpRequest();
        xhr.open("GET","http://donatu33.sakura.ne.jp/api/url/expand.php?url="+encodeURIComponent($("#shorturl").val()));
        xhr.send();
        xhr.addEventListener("load",function(ev){
            $("#longurl").val(xhr.response)
        });
    });
    $("#access").on("click",function(){
        if(confirm($('#longurl').val()+"にアクセスします。\nよろしいですか？")){
            window.open($('#longurl').val());
        }
    });
});
