(
function () {

    var myvacation = {}


    myvacation.getVacation = function (id, calendar) {

        var ret = [];

        //var obj = { "id": id, "bigindate": calendar[0], "Vacation": [
        //       { "workdate": 20171001, "type": "V", "hours": 8 }, { "workdate": 20171007, "type": "S", "hours": 8 },
        //       { "workdate": 20171015, "type": "F", "hours": 4 }, { "workdate": 20171022, "type": "V", "hours": 8 },
        //       { "workdate": 20171026, "type": "O", "hours": 7 }
        //       ]
        // };

        //sql = "select workdate, type , hours from workschedule where id = \'" + obj.id + "\' and workdate >= " + obj.bigindate + " orderby workdate desc"
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
    //console.log(JSON.stringify(data) ); 
    //有延迟
    //-----------------------------------------------------------
    for (var i = 0; i < 7 * 6; i++) {
        var vacinf = "";
        var vacRecArray = [0,0,0,0,0,0];
        $.each(data, function (j, item) {
            //console.log('>' + calendar[i])
            if ((calendar[i] == item.WORKDATE)
               && ( item.TYPE == 'h' || item.TYPE == 'H' ||
                    item.TYPE == 'v' || item.TYPE == 'V' ||
                    item.TYPE == 'f' || item.TYPE == 'F' ||
                    item.TYPE == 's' || item.TYPE == 'S' ||
                    item.TYPE == 'o' || item.TYPE == 'O')) {
                var hours = 0;
                    hours = parseInt(item.WORKHOURS);
                //所有当天休假记录保留
                //vacRecArray.push(JSON.stringify(item).toUpperCase());
                //约定1；calendar[42][1]=Holiday Hours
                if(item.TYPE == 'h' || item.TYPE == 'H'){vacRecArray[1]+= hours;}
                //约定2；calendar[42][2]=Vacation Hours
                if(item.TYPE == 'v' || item.TYPE == 'V'){vacRecArray[2]+= hours;}
                //约定3；calendar[42][3]=Flex leave Hours
                if(item.TYPE == 'f' || item.TYPE == 'F'){vacRecArray[3]+= hours;}
                //约定4；calendar[42][4]=Sick leave Hours
                if(item.TYPE == 's' || item.TYPE == 'S'){vacRecArray[4]+= hours;}
                //约定5；calendar[42][5]=Other leave Hours
                if(item.TYPE == 'o' || item.TYPE == 'O'){vacRecArray[5]+= hours;}
                //约定6；calendar[42][0]=Worktime
                //worktime = 9 - vacRecArray[1] - vacRecArray[2] - vacRecArray[3] - vacRecArray[4] - vacRecArray[5];
                //if(worktime < 0){ vacRecArray[0]= 0;console.log('[Warning]' + calendar[i] + '的假期总和超出9小时');}
                //else{vacRecArray[0]= worktime;}

                //编辑Vacation字符串
                vacinf = vacinf  + item.TYPE;
                if (hours < 8) { vacinf = vacinf + hours; }
            }
        }
        )
        //更新Vacation数组
        var vacsum = vacRecArray[0] + vacRecArray[1] + vacRecArray[2] + vacRecArray[3] + vacRecArray[4] + vacRecArray[5]
        if(vacsum == 0){ret[i]="";}
        else{ret[i] = vacRecArray;}       
        //console.log('getvacation:' + ret[i])

        //HTML 作成
        if(vacinf!=null){vacinf = vacinf.toUpperCase()}
        var vacinf_color  = "blue";
        var dateinf_color = "black"
        if (i % 7 == 0) { html += '<tr>';}
        html += '<td ';
        //如果不是周末也不是Holiday才有Click响应
        if(i % 7 != 0 && i % 7 != 6 && vacinf.search(/H/i)==-1){
           html += ' onclick=\"setTdFont(' + i + ')\"' ;
        }
        html += ' id=\"' + i + '\">'
        if(i%7==0 || i%7==6){dateinf_color = "gray";}//周末字体颜色设定
        if(vacinf.search(/H/i)!=-1){vacinf_color = "brown";}//Holiday字体颜色设定
        html += '<font color=\"' + dateinf_color +  '\">' + calendar[i].toString().substr(6, 2) + '</font>' ;
        html += '<font size=\"4\" color=\"' + vacinf_color +  '\">' + vacinf + '</font>' ;
        html += '</td>';       
        if (i % 7 == 6) { html += '</tr>';}


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