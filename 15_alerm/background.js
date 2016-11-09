var audio = {
    0: new Audio("./sound/0.wav"),
    1: new Audio("./sound/1.wav"),
    2: new Audio("./sound/2.wav"),
    3: new Audio("./sound/3.wav"),
    4: new Audio("./sound/4.wav"),
    5: new Audio("./sound/5.wav"),
    6: new Audio("./sound/6.wav"),
    7: new Audio("./sound/7.wav"),
    8: new Audio("./sound/8.wav"),
    9: new Audio("./sound/9.wav"),
    10: new Audio("./sound/10.wav"),
    11: new Audio("./sound/11.wav"),
    12: new Audio("./sound/12.wav"),
    13: new Audio("./sound/13.wav"),
    14: new Audio("./sound/14.wav"),
    15: new Audio("./sound/15.wav"),
    16: new Audio("./sound/16.wav"),
    17: new Audio("./sound/17.wav"),
    18: new Audio("./sound/18.wav"),
    19: new Audio("./sound/19.wav"),
    20: new Audio("./sound/20.wav"),
    21: new Audio("./sound/21.wav"),
    22: new Audio("./sound/22.wav"),
    23: new Audio("./sound/23.wav"),
};

function getNext(){
    var nextdata = {"time":null, "hour":null};
    var hour = (new Date()).getHours();
    var min = (new Date()).getMinutes() * 60;
    var sec = (new Date()).getSeconds();
    if(hour == 23){
        nextdata.hour = 0;
    }else{
        nextdata.hour = hour + 1;
    }
    nextdata.time = (3600 - min - sec) * 1000;
    return nextdata;
}

function setAlert(nextdata){
    setTimeout(function(){
        audio[nextdata.hour].volume = 1.0;
        audio[nextdata.hour].play();
        setAlert(getNext());
	},(nextdata.time));
}

$(function () {
   setAlert(getNext());
});


