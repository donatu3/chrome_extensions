chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if(request == "clecked"){
        html2canvas(document.body,{
            onrendered: function(canvas){
                var link = document.createElement('a');
                link.download = "ss";
                link.href = canvas.toDataURL("image/png");
                link.click();
            }
        });
    }
}); 