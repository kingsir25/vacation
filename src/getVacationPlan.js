(
function () {

    var vacationplan = {}


    vacationplan.getVacationPlan = function (yyyymm) {

        var ret = [];
        var url = "http://10.1.251.111:8080/ora/db/query?" 
                 +"sql=select%20*%20from%20vacview%20where%20" 
                 +"YYYYMM%20=%20" + yyyymm;
        console.log("url=" + url);
        $.getJSON(url
, function (data) {
    var html = "";
        //表头编辑
        html= '<thead><tr><th>EID</th>'
        for (var i = 1; i < 32; i++) {html= html + '<th>' + yyyymm.substr(4, 2) + '/' + i +'</th>'; }
        html= html + '</tr> </thead>'
        //表内容编辑
        html= html + '<tbody>'
          
        $.each(data,function (i, item) {
          JSON.stringify(item).toUpperCase();
          html= html + '<tr>';
          html= html + '<td>' + item.NAME +'</td>';
          html= html + '<td>' + item.D01 +'</td>';
          html= html + '<td>' + item.D02 +'</td>';
          html= html + '<td>' + item.D03 +'</td>';
          html= html + '<td>' + item.D04 +'</td>';
          html= html + '<td>' + item.D05 +'</td>';
          html= html + '<td>' + item.D06 +'</td>';
          html= html + '<td>' + item.D07 +'</td>';
          html= html + '<td>' + item.D08 +'</td>';
          html= html + '<td>' + item.D09 +'</td>';
          html= html + '<td>' + item.D10 +'</td>';
          html= html + '<td>' + item.D11 +'</td>';
          html= html + '<td>' + item.D12 +'</td>';
          html= html + '<td>' + item.D13 +'</td>';
          html= html + '<td>' + item.D14 +'</td>';
          html= html + '<td>' + item.D15 +'</td>';
          html= html + '<td>' + item.D16 +'</td>';
          html= html + '<td>' + item.D17 +'</td>';
          html= html + '<td>' + item.D18 +'</td>';
          html= html + '<td>' + item.D19 +'</td>';
          html= html + '<td>' + item.D20 +'</td>';
          html= html + '<td>' + item.D21 +'</td>';
          html= html + '<td>' + item.D22 +'</td>';
          html= html + '<td>' + item.D23 +'</td>';
          html= html + '<td>' + item.D24 +'</td>';
          html= html + '<td>' + item.D25 +'</td>';
          html= html + '<td>' + item.D26 +'</td>';
          html= html + '<td>' + item.D27 +'</td>';
          html= html + '<td>' + item.D28 +'</td>';
          html= html + '<td>' + item.D29 +'</td>';
          html= html + '<td>' + item.D30 +'</td>';
          html= html + '<td>' + item.D30 +'</td>';
          html= html + '<td>' + item.D31 +'</td>';
          html= html + '</tr>'
        });
        html= html + '</tbody>';
    //取得Vacation信息后，再刷新一次table
    if (html != "") { document.getElementById('tid').innerHTML = html; }
        ret=data;
    //-------------------------------------------------------------

}
);

        //返回Vacation数组
        return ret;
    }

    window.vacationplan = vacationplan;

}
)();