import axios from "axios";
export const getLogin = (params) =>{
    return dispatch =>{
        const headers = {
            'Content-Type': 'application/json'
          }
     axios.post("https://begratefulapp.ca/api/login",params, {
        headers: headers
      }).then((response) =>{
        if(response.status==200)
        {
            var json = response.data;
           if(json["result"] == "success")
           {
                var message = json["message"];
           }
           else
           {
            var message = json["message"];
           }
           alert(message);
        }
     });
    
    }
};