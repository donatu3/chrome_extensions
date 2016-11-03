chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request == "add_filter") {
        $('body').prepend('<div class="chrome_ex6_black_cover"></div>');
        chrome.storage.local.get("ex6_filter", function (value) {
            if(value.ex6_filter){
                $(".chrome_ex6_black_cover").css('opacity',value.ex6_filter);
            }else{
                $(".chrome_ex6_black_cover").css('opacity','0.5');
            }
        });
    }
    if(request == "remove_filter"){
        $(".chrome_ex6_black_cover").remove();
    }
}); 

$('body').on('click',function(){
    $(".chrome_ex6_black_cover").remove();
    chrome.runtime.sendMessage({
        status: "remove_filter"
    });
});
