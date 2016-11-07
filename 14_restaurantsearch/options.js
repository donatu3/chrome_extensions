$(function () {
    var options = {"lat":null,"lng":null,"area":null,"budget":null};
    chrome.storage.local.get("ex14_datas", function (value) {
        if(value.ex14_datas){
            $("#lat").val(value.ex14_datas.lat);
            $("#lng").val(value.ex14_datas.lng);
            $("#area").val(value.ex14_datas.area);
            $("#budget").val(value.ex14_datas.budget);
        }
    });
    $('#setting').click(function(){
        options.lat = $("#lat").val();
        options.lng = $("#lng").val();
        options.area = $("#area").val();
        options.budget = $("#budget").val();
        console.log(options);
        chrome.storage.local.set({'ex14_datas': options});
    });
});