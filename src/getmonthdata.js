(
function(){

var datepicker ={}

  datepicker.getMonthData = function(year,month){
    var ret = new Array();
    if(!year||!month){
    	var today = new Date();
    	year=today.getFullYear();
    	Month =today.getMonth()+1;
    }
//console.log(year +"年" + Month +"月");


    var firstDay = new Date(year, month-1, 1)
    var firstDayWeekDay = firstDay.getDay();
//console.log("本月第一天星期" + firstDayWeekDay);
    var lastDateOfLastMonth = new Date(year, month,0).getDate();
    var lastDateOfThisMonth = new Date(year, month-1, 0).getDate();
//console.log("上个月最后一天是" + lastDateOfLastMonth);
//console.log("本个月最后一天是" + lastDateOfThisMonth);
    var begindate = 1;

    if(firstDayWeekDay > 0) {
       begindate = lastDateOfLastMonth  - firstDayWeekDay;
    }
//console.log("begindate=" + begindate);
ret[0] = begindate;
    for(var i=1;i<7*6;i++){

      ret[i] = ret[i-1] +1;

      //1周以内日大于上月最后一天，四周以上大于本月最后一天
      if (  (ret[i] > lastDateOfLastMonth && i < 7) 
      	  ||(ret[i] > lastDateOfThisMonth && i >28)
      	 )
      	{  ret[i] = 1;}
//            console.log("第"+ i + "天"+ ret[i]);
    }

    return ret;
 }  

window.datepicker = datepicker;

}
)();