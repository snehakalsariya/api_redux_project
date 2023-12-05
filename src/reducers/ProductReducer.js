const inititalState = {
    "loading":false,
    "productData":[],
    "insertmessage":"",
    "single":{},
    "isupdate":false
};

const ProductReducer = (state=inititalState,action) => {
    switch(action.type)
    {
        case "LOADING_START":
            return {
                ...state,
                "loading":true
            };
        case "LOAD_DATA":
            return {
                ...state,
                "loading":false,
                "isupdate":false,
                "productData":action.payload.data
            };
        case "OP_INSERT":
            return {
                ...state,
                "loading":false,
                "insertmessage":action.payload.message
            };
        case "OP_UPDATE":
            return {
                ...state,
                "isupdate":true
            };
        case "GET_SINGLE_DATA":
            return {
                ...state,
                "single":action.payload.data
            };
        default:
            return {
                ...state,
                "insertmessage":""
            };
    }
};

export default ProductReducer;