$(function () {
    var temp;
    if(localStorage.getItem("ex02_count") != null){
        $("#value").text(localStorage.getItem("ex02_count"));
    }else{
        $("#value").text(0);
    }
    
    $("#count").on("click",function(){
        temp = parseInt($("#value").text(),10);
        temp = temp + 1;
        $("#value").text(temp);
        localStorage.setItem("ex02_count",temp);
    });
    
    $("#reset").on("click",function(){
        $("#value").text(0);
        localStorage.setItem("ex02_count",0);
    });
});
