(
function () {

    var myvacation = {}


    myvacation.getVacation = function (id, calendar) {

        var ret = [];

        var obj = { "id": id, "bigindate": calendar[0], "Vacation": [
               { "workdate": 20171001, "type": "V", "hours": 8 }, { "workdate": 20171007, "type": "S", "hours": 8 },
               { "workdate": 20171015, "type": "F", "hours": 4 }, { "workdate": 20171022, "type": "V", "hours": 8 },
               { "workdate": 20171026, "type": "O", "hours": 7 }
               ]
        };

        sql = "select workdate, type , hours from workschedule where id = \'" + obj.id + "\' and workdate >= " + obj.bigindate + " orderby workdate desc"
        //url ="http://10.1.251.111:8080/ora/db/query?sql=select%20*%20from%20workschedule%20where%20workdate%20%3E%20=%2020171001%20and%20workdate%20%3C=%2020171031%20and%20name%20=%27jake.jian.wang%27%20and%20type%20%3C%3E%20%27w%27"
        var url = "http://10.1.251.111:8080/ora/db/query?" 
                 +"sql=select%20*%20from%20workschedule%20where%20" 
                 +"workdate%20%3E%20=%20" + calendar[0] 
                 +"%20and%20workdate%20%3C=%20" + calendar[calendar.length - 1]
                 +"%20and%20name%20=%27" + id
                 +"%27%20and%20type%20%3C%3E%20%27w%27";
        console.log("id=" + id + " begindate=" +calendar[0] + " enddate=" +calendar[calendar.length - 1]);
        console.log("url=" + url);
        $.getJSON(url
, function (data) {
    var html = "";
    //obj.Vacation = data;
    //console.log(JSON.stringify(data).toLowerCase() ); 
    //有延迟
    //-----------------------------------------------------------
    for (var i = 0; i < 7 * 6; i++) {
        var vacinf = "";
        var vacRecArray = [];
        $.each(data, function (j, item) {
            //console.log('>' + calendar[i])
            if ((calendar[i] == item.WORKDATE)
               && (item.TYPE == 'v' || item.TYPE == 'V' ||
                    item.TYPE == 'f' || item.TYPE == 'F' ||
                    item.TYPE == 'o' || item.TYPE == 'O' ||
                    item.TYPE == 's' || item.TYPE == 'S')) {
                //所有当天休假记录保留
                vacRecArray.push(JSON.stringify(item).toLowerCase());
                //编辑Vacation字符串
                vacinf = vacinf  + item.TYPE;
                if (item.hours < 8) { vacinf = vacinf + item.hours; }
            }
        }
        )
        //更新Vacation数组
        ret[i] = vacRecArray;
        //console.log('getvacation:' + ret[i])

        //HTML 作成
        if (i % 7 == 0) { html += '<tr>'; }
        html += '<td onclick=\"setTdFont(' + i + ')\" id=\"' + i + '\">'
                  + calendar[i].toString().substr(6, 2) + '<font size=\"4\" color=\"blue\">'
                  + vacinf + '</font>' + '</td>';
        if (i % 7 == 6) { html += '</tr>'; }
    }
    //取得Vacation信息后，再刷新一次table
    if (html != "") { document.getElementById('ctid').innerHTML = html; }

    //-------------------------------------------------------------

}
);

        //返回Vacation数组
        return ret;
    }

    window.myvacation = myvacation;

}
)();