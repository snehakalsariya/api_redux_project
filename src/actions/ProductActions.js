import axios from "axios";

export const getAllProduct = () => {

    return dispatch => {
        dispatch({"type":"LOADING_START"});
        axios.get("https://studiogo.tech/student/studentapi/getProducts.php").then((response)=>{
            if(response.status==200)
            {
                var data = response.data["data"];
                dispatch({"type":"LOAD_DATA",payload:{"data":data}});
            }
        });
    };
};
 export const insertProduct = (formdata) => {

    return dispatch => {
        dispatch({"type":"LOADING_START"});
        axios.post("https://studiogo.tech/student/studentapi/insertProductNormal.php",formdata).then((response)=>{
            if(response.status==200)
            {
                var json = response.data;
                if(json["status"]=="true")
                {
                    var message = json["message"];
                    dispatch({"type":"OP_INSERT",payload:{"message":message}});
                }
                else
                {
                    var message = json["message"];
                    dispatch({"type":"OP_INSERT",payload:{"message":message}});
                }
            }
        })
    };

 };
 export const deleteProduct = (pid) => {

    
    return dispatch => {

        var formdata = new FormData();
        formdata.append("pid",pid);

        axios.post("https://studiogo.tech/student/studentapi/deleteProductNormal.php",formdata).then((response)=>{
            if(response.status==200)
            {
                var json = response.data;
                if(json["status"]=="true")
                {
                    var message = json["message"];
                    dispatch(getAllProduct());
                }
                else
                {
                    var message = json["message"];
                    alert(message);
                }
            }
        })
    }
 };

 export const getSingleProduct = (pid) => {
    return dispatch => {
        var formdata = new FormData();
        formdata.append("pid",pid);

        axios.post("https://studiogo.tech/student/studentapi/getSingleProduct.php",formdata).then((response)=>{
            if(response.status==200)
            {
                var json = response.data;
                dispatch({"type":"GET_SINGLE_DATA","payload":{"data":json["data"]}});
            }
        })
    };
 };


export const updateProduct = (formdata) => {
    return dispatch => {
        axios.post("https://studiogo.tech/student/studentapi/updateProductNormal.php",formdata).then((response)=>{
            if(response.status==200)
            {
                var json = response.data;
                if(json["status"] == "true")
                {
                    dispatch({"type":"OP_UPDATE"});
                    dispatch(getAllProduct());
                }
            }
        })
    };
};