
const inititalstate = {
  

    "loading": false,
    "EmployeeData": [],
    "insertmessage":"",
    "single": {},
    "isupdate":false
};


const EmployeeReducer = (state=inititalstate,action) =>{
    switch(action.type)
    {
        case  "LODING_START" :
          return{
            ...state,
            "loading":true
          }
        case  "LODING_DATA" :
          return{
           ...state,
              "loading":false,
              "isupdate":false,
              "EmployeeData":action.payload.data  
          }
          case "OP_INSERT":
            return{
              ...state,
              "loading":false,
              "insertmessage":action.payload.message
            }
            case "OP_UPDATE":
              return{
                ...state,
                "isupdate":true,
                
              }  
          case "GET_SINGLE_DATA":
            return{
              ...state,
              "single" : action.payload.data
            }
        default:
            return state;
    }
};
export default EmployeeReducer;