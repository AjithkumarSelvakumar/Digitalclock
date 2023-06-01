
// var a=0
// function startexe(){
// var b=setInterval(fun,1000)
// window.c=b
// function fun(){
//     var para = document.getElementById("para");
//     para.textContent = a++;
// }
// }

// function stopexe(){
//     clearInterval(c)
// }


// TIME
setInterval(showTime,1000)
function showTime(){
    var time = new Date()
    var hour = time.getHours()
    var minute = time.getMinutes()
    var second = time.getSeconds()
    var am_pm = "AM"

    var time= new Date()
    var date_date = time.getDate()
    var date_day = time.getDay()
    console.log(date_date)
    console.log(date_day)
    var arr = ["sun","mon","Tue","Wed","Thu","Fri","Sat"]
    console.log(arr[date_day]);


    if (hour>=12){
        am_pm="PM"
        hour=hour-12
    }
    if(hour==0){
        hour=12
    }
    // if(second<10){
    //     second="0"+second
    // }
    // if(minute<10){
    //     minute="0"+minute
    // }
    // if(hour<10){
    //     hour="0"+hour
    // }
    var hour=hour<10 ? "0"+hour : hour
    var minute=minute<10 ? "0"+minute : minute
    var second=second<10 ? "0"+second : second
    var para = document.getElementById("para")
    para.textContent=`${hour}: ${minute}: ${second}:${am_pm}`

    
}