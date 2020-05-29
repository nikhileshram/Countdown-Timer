var x = setInterval(birthday_timer, 1000)
function birthday_timer(){
    var future = new Date(2020, 4, 29, 13, 58 ,20).getTime()
    var present = new Date().getTime()
    var diff = future - present
    var days = Math.floor(diff/(24*3600*1000))
    var hrs = Math.floor((diff%(1000*60*60*24))/(1000*60*60))
    var mins = Math.floor((diff % (1000*60*60))/(1000*60))
    var seconds = Math.floor((diff % (1000*60))/1000)
    if(days<=0 && hrs<=0 && mins<=0 && seconds<=0)
    {   document.getElementById("dynamic").innerHTML="Happy birthday bro"
        clear_time()    } 
    else
        document.getElementById("dynamic").innerHTML = days + "D, " + hrs + "h :" + mins + "m :" + seconds + "s"
    
}

function clear_time(){
    clearInterval(x)
}