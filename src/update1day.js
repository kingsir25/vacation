(
function(){

var updateonedayvacation ={}

  updateonedayvacation.updateVacByDay = function(data_param){

 var result =0;

console.log(data_param);
//data_param:休假信息JSON对象Array
data_param = [{"name":"jake.jian.wang","team":"mf11","workdate":20171219,"type":"S","workhours":8}];

//AJAX操作step1： 删除当日休假信息
        $.ajax({
            //url: "http://10.1.251.111:8080/ora/db/query",
            url: "http://localhost:8080/OraDAO-0.0.1-SNAPSHOT/db/insert?sql=delete%20from%20workschedule%20where%20workdate%20=%2720171202%27%20and%20name%20=%27jake.jian.wang%27%",
            type: "POST",
            data:JSON.stringify(data_param),
            headers: {
                "Content-Type": "application/json"
            },
            contentType: 'application/json"; charset=UTF-8',
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (data) {
                alert("JSON Data ID: " + data.name);
           

                //AJAX操作step2： 把JSON对象插入到DB
                    $.ajax({
                        //url: "http://10.1.251.111:8080/ora/db/query",
                        url: "http://localhost:8080/OraDAO-0.0.1-SNAPSHOT/workschedule/adds",
                        type: "POST",
                        data:JSON.stringify(data_param),
                        headers: {
                            "Content-Type": "application/json"
                        },
                        contentType: 'application/json"; charset=UTF-8',
                        dataType: "json",
                        xhrFields: {
                            withCredentials: true
                        },
                        crossDomain: true,
                        success: function (data) {
                            alert("JSON Data ID: " + data.name);
                        },
                        error: function (XMLHttpRequest, textStatus, errorThrown) {
                            result = -1
                            alert("status=" + XMLHttpRequest.status);
                            alert("readyState=" + XMLHttpRequest.readyState);
                            alert("textStatus=" + textStatus);
                        },
                        complete: function (XMLHttpRequest, textStatus) {
                            result = 1
                        }
                    });

         },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                result = -1
                alert("status=" + XMLHttpRequest.status);
                alert("readyState=" + XMLHttpRequest.readyState);
                alert("textStatus=" + textStatus);
            },
            complete: function (XMLHttpRequest, textStatus) {
              result = 1
            }
        });

    return result;
 } 

window.updateonedayvacation = updateonedayvacation;

}
)();