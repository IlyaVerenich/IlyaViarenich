window.onload=function(){
    window.setInterval(function () {
// get newDate()
        var date= new Date();

        var hours=date.getHours();
        var minutes=date.getMinutes();
        var sec=date.getSeconds();

//************************************************** */
        if (hours<10) {
            hours="0"+hours;
        };
        if (minutes<10) {
            minutes="0"+minutes;
        };
        if (sec<10) {
            sec="0"+sec;
        };
//*************************************************** */
//  Create "Clock" format
        var clock=hours + ':'+ minutes+':' + sec;
        document.getElementById("clock").innerHTML=clock;
//*************************************************** */
        var year=date.getFullYear();
        var month=date.getMonth();
        var day=date.getDate();
//*************************************************** */
    if (month<10) {
        month="0"+month;
    };
    if (day<10) {
        day="0"+day;
    };
//  Create "Calendar" format
        var fullDate=day+'.'+month+'.'+year;
        document.getElementById("date").innerHTML=fullDate;
    })
}