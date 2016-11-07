//chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    //if(request == "clicked"){
$(".contentBody.uad.video ul.list li.item").each(function() {
    var movieid = $(this).data("id");
    //console.log(movieid);
    var self=this;
    (function(m_self,m_movieid){
        var userid;
        $.ajax({
            url:"http://ext.nicovideo.jp/api/getthumbinfo/"+m_movieid,
            type:'GET',
            dataType:'xml',
            timeout:1000,
            error:function() {
                console.log("ロード失敗");
            },
            success:function(xml){
                userid = $(xml).find("user_id").text();
                chrome.storage.local.get("ex11_ids", function (value) {
                    if(value.ex11_ids){
                        var ids = value.ex11_ids;
                        for (var i = 0; i < ids.length; i++) {
                            if(userid == ids[i]){
                                /*
                                console.log(m_movieid);
                                console.log(userid);
                                console.log(m_self);
                                */
                                $(m_self).hide();
                            }
                        }
                    }
                });
            }
        });
    })(self,movieid);            
});
    //}
//}); 

            /*
            var xhr= new XMLHttpRequest();
            xhr.open("GET","http://ext.nicovideo.jp/api/getthumbinfo/"+movieid);
            xhr.send();
            xhr.addEventListener("load",function(ev){
                userid = xhr.responseXML.getElementsByTagName('user_id')[0].firstChild.nodeValue;
                console.log(userid);
                //投稿者id
                if(userid == 20367381){
                    $(self).fadeOut("slow");
                }
            });
            */