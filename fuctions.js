function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function myTime() {
    var d = new Date();
    var x = document.getElementById("demo");
    var h = addZero(d.getHours());
    var startTime=h;
    var breakfast=6 ;
    var lunch=12;
    var dinner=16;
    var currenttime=new Date('2018-09-11 12:00');
    if(currenttime.getHours()===breakfast) {
        alert("time to eat breakfast");
    } else if(currenttime.getHours()===lunch){
        alert("time to eat lunch");
    }else if(currenttime.getHours()===dinner){
                alert("time to eat dinner");
    }
    if(currenttime.getHours()-startTime.getHours()>=6){
        startTime=currenttime;
        alert("Time to take rest休息时间");

    }


    
}
function demoVisibility() {
    document.getElementById("startbutton").style.display ="none";
    document.getElementById("endbutton").style.display="block";
}
function demoVisibility1() {
    document.getElementById("endbutton").style.display ="none";
    document.getElementById("startbutton").style.display="block";
}
/*function eatTime(){
    var breakfast= ;
    var lunch=;
    var dinner=;
}*/