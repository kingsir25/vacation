(
function(){

var datepicker ={}

  datepicker.getCalendar = function(year,month){

console.log(year +"年" + month +"月");
    var ret = [];
    var today = new Date();
    if(!year||!month){
    	year=today.getFullYear();
    	month =today.getMonth()+1;
    }
console.log(year +"年" + month +"月");

//取出当月第一天，取出当月第一天星期几
    var firstDay = new Date(year, month-1, 1)
    var firstDayWeekDay = firstDay.getDay();
    //取出Calendar的开始日期

    var beginDateObj = firstDay;

    beginDateObj.setDate(firstDay.getDate() - firstDayWeekDay);
    console.log("begindate=" + beginDateObj.toString());

    ret[0] = beginDateObj.getFullYear()*10000 + (beginDateObj.getMonth()+1)*100 + beginDateObj.getDate();
    for(var i=1;i<7*6;i++){
        var yyyy = ret[i-1].toString().substr(0,4);
        var mm = (parseInt(ret[i-1].toString().substr(4,2)) - 1).toString();
        //var mm = ret[i-1].toString().substr(4,2);
        var dd = ret[i-1].toString().substr(6,2);

      var lastDate = new Date(yyyy,mm,dd);
      var myDate = firstDay;
      //console.log("lastDate=" + lastDate.toString());
      myDate.setDate(lastDate.getDate() + 1);
      //console.log("myDate=" + myDate.toString());
      ret[i] = myDate.getFullYear()*10000 + (myDate.getMonth()+1)*100 + myDate.getDate();
//      console.log("第"+ i + "天"+ ret[i]);

    }

    return ret;
 }  

window.datepicker = datepicker;

}
)();