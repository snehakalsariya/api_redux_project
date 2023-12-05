import axios from "axios";

export const getAllemployee = () =>{
    

    return dispatch => {
        dispatch({"type":"LODING_START"});
        axios.get("https://studiogo.tech/student/studentapi/getEmployee.php").then((response)=>{
            if(response.status==200)
            {
                var data = response.data["data"];
                dispatch({"type":"LODING_DATA",payload:{"data":data}});
                
            }
        });
    };
};

export const insertEmployee = (formdata) => {
    return dispatch =>{
        dispatch({"type":"LODING_START"}); 
        axios.post("https://studiogo.tech/student/studentapi/insertEmployeeNormal.php",formdata).then((response)=>{
           if(response.status==200)
           {
             var json = response.data;
             if(json["status"]=="true")
             {
               var message = json["message"];
               dispatch({"type":"OP_INSERT",payload:{"message":message}})
             }
             else
             {
               var message = json["message"];
               dispatch({"type":"OP_INSERT",payload:{"message":message}})
             }
           }
         })
         
    };
    };

export const deleteEmployee =(eid) =>{

  return dispatch =>{
  var formdata = new FormData();
  formdata.append("eid",eid);
 
 
  axios.post("https://studiogo.tech/student/studentapi/deleteEmployeeNormal.php",formdata).then((response)=>{
    if(response.status==200)
    {
      var json = response.data;
      if(json["status"]=="true")
      {
        var message = json["message"];
        dispatch(getAllemployee());
      }
      else
      {
        var message = json["message"];
        alert(message);
      }
    }
  })
};
}; 
export const getsingleEmployee = (eid) =>{
  return dispatch =>{
    var formdata = new FormData();
    formdata.append("eid",eid);
   
   
    axios.post("https://studiogo.tech/student/studentapi/getSingleEmployee.php",formdata).then((response)=>{
      if(response.status==200)
      {
        var json = response.data;
        dispatch({"type":"GET_SINGLE_DATA","payload":{"data":json["data"]}});
      }
    }) 
  };
};   

export const updateEmployee = (formdata) =>{
  return dispatch =>{
    axios.post("https://studiogo.tech/student/studentapi/updateEmployeeNormal.php",formdata).then((response)=>{
            if(response.status==200)
            {
                var json = response.data; 
                if(json["status"] == "true")
                {
                    dispatch({"type":"OP_UPDATE"});
                    dispatch(getAllemployee());
                }
            }
        })
  }
};

