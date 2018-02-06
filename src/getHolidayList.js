(
function () {

    var holidaylist = {}

    holidaylist.getHolidayList = function (yyyymmdd) {

        var ret = [];
        var url = "http://10.1.251.111:8080/ora/db/query?sql=select%20*%20from%20holiday";
        $.getJSON(url, function (data) {ret=data;});
        //返回Holiday数组
        return ret;
    }
    window.holidaylist = holidaylist;

}
)();