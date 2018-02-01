(
function(){

var RESTfulAPI ={}

  RESTfulAPI.post_insert = function(data_param){

 var result =0;

console.log(data_param);
//data_param:休假信息text/plain
//data_param = "delete from workschedule where name = \'jake.jian.wang\' and workdate = \'20171221'" ;
//delete from workschedule where workhours = 0
//AJAX操作step1： 删除当日休假信息
        $.ajax({
            //url: "http://10.1.251.111:8080/ora/db/query",
            url: "http://localhost:8080/OraDAO-0.0.1-SNAPSHOT/db/insert",
            type: "POST",
            data:data_param,
            headers: {
                //"Content-Type": "application/json"
                "Content-Type": "text/plain; charset=utf-8"
            },
            //contentType: 'application/json; charset=UTF-8',
            contentType: "text/plain; charset=utf-8",
            dataType: "text",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function (data) {
            //alert("sql excute success: " + data_param );
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

window.RESTfulAPI = RESTfulAPI;

}
)();