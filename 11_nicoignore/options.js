$(function () {
    var id_list = [];
    chrome.storage.local.get("ex11_ids", function (value) {
        if(value.ex11_ids){
            $("#list").html("除外リスト<br>");
            var ids = value.ex11_ids;
            console.log(ids);
            for (var i = 0; i < ids.length; i++) {
                window.console.log(ids[i]);
                $("#list").append("[" + i + "]:" + ids[i] + "<br>");
            }
        }
    });
    $('#add').on('click',function(){
        var Val = $("#userid").val();
        chrome.storage.local.get("ex11_ids", function (value) {
            if(value.ex11_ids){
                id_list = value.ex11_ids;
                id_list.push(Val); 
                chrome.storage.local.set({'ex11_ids': id_list});
            }else{
                id_list.push(Val); 
                chrome.storage.local.set({'ex11_ids': id_list});
            }
        });
        location.reload();
    });
    $('#remove').click(function(){
        chrome.storage.local.get("ex11_ids", function (value) {
            if(value.ex11_ids){
                var Val = $("#deletenum").val();
                id_list = value.ex11_ids;
                id_list.splice( Val, 1 );
                chrome.storage.local.set({'ex11_ids': id_list});
                location.reload();

            }else{
                alert("idが登録されていません")
            }
        });
    });
    $('#alldelete').click(function(){
        chrome.storage.local.remove(["ex11_ids"], function(){
            alert("削除");
        });
        location.reload();
    });
});