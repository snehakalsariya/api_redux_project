import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertProduct } from "../actions/ProductActions";

const AddProduct = () =>{
  
    const tname = useRef();
    const qty = useRef();
    const price = useRef();

    var dispatch = useDispatch();

    let {loading,insertmessage} = useSelector(state=>state.product);

   const handleClick = () => {
    var formdata = new FormData();
    formdata.append("pname",tname.current.value);
    formdata.append("qty",qty.current.value);
    formdata.append("price",price.current.value);

    dispatch(insertProduct(formdata));
   };


    if(loading==true)
    {
        return (<h1>Loading...</h1>); 
    }


    return(<>
      <h1>Add Product Data</h1>
      <h2>{insertmessage}</h2>
      <form method="post" onSubmit={handleClick}>
        Name :<input type="text" ref={tname}></input><br/>
        <br/>
        Quantity :<input type="text" ref={qty}></input><br/>
        <br/>
        Price :<input type="text" ref={price}></input><br/>
        <br/>
        <button type="submit">Add</button>
      </form>
    </>);
};
export default AddProduct;