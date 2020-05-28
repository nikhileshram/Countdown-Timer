var x = setInterval(function(){
var future = new Date(2020, 5, 25, 10, 0, 0).getTime()
var present = new Date().getTime()
var diff = future - present
var days = Math.floor(diff/(24*3600*1000))
var hrs = Math.floor((diff%(1000*60*60*24))/(1000*60*60))
var mins = Math.floor((diff % (1000*60*60))/(1000*60))
var seconds = Math.floor((diff % (1000*60))/1000)
document.getElementById("dynamic").innerHTML = days + "D, " + hrs + "h :" + mins + "m :" + seconds + "s"
}, 1000)