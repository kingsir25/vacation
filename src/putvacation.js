(
function(){

var dbvacation ={}

  dbvacation.putVacation = function(id,vacationData){

 var result =0;
 var data_param =[];

console.log(vacationData);
//  for(var i=0;i<7*6;i++){
//   if (data_param[i] !=""){
//     data_param[i].toString().replace("{","{\"name\":\"" + id + "\",\"team\":\"mf1\",")
//   }
// }
  for(var i=0;i<7*6;i++){
   if (vacationData[i] !=""){
       for(var j=0;j<vacationData[i].length;j++){
          data_param.push(vacationData[i][j]);
       }
     
  }
 }

console.log(data_param);
data_param = [{"name":"jake.jian.wang","team":"mf11","workdate":20171219,"type":"S","workhours":8}];

//data_param = {[{"name":"jake.jian.wang","team":"mf11","workdate":20171101,"type":"V","workhours":8},{"name":"jake.jian.wang","team":"mf11","workdate":20171107,"type":"S","workhours":8},{"name":"jake.jian.wang","team":"mf11","workdate":20171115,"type":"F","workhours":4},{"name":"jake.jian.wang","team":"mf11","workdate":20171122,"type":"V","workhours":8},{"name":"jake.jian.wang","team":"mf11","workdate":20171126,"type":"O","workhours":8}]};

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

    return result;
 } 

window.dbvacation = dbvacation;

}
)();