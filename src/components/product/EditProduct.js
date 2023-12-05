import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../actions/ProductActions";
import { useNavigate } from "react-router-dom";

const EditProduct = () =>{
  
    const tname = useRef();
    const qty = useRef();
    const price = useRef();

    const {single} = useSelector(state=>state.product);

    useEffect(()=>{
        tname.current.value = single.pname;
        qty.current.value = single.qty;
        price.current.value = single.price;
    },[single]);

    const dispatch = useDispatch();

    const handleUpdate = (e) =>{
      e.preventDefault();
      var formdata = new FormData();
      formdata.append("pid",single.pid);
      formdata.append("pname",tname.current.value);
      formdata.append("qty",qty.current.value);
      formdata.append("price",price.current.value);

      dispatch(updateProduct(formdata));
      
    };


    const {isupdate} = useSelector(state=>state.product);
    const navigate = useNavigate();

    useEffect(()=>{
      if(isupdate ==true)
      {
        navigate("/viewproduct");
      }
    },[isupdate]);

    return(<>
      <h1>Edit Product Data</h1>
      <form method="post" onSubmit={handleUpdate}>
        Name :<input type="text" ref={tname}></input><br/>
        <br/>
        Quantity :<input type="text" ref={qty}></input><br/>
        <br/>
        Price :<input type="text" ref={price}></input><br/>
        <br/>
        <button type="submit">Update</button>
      </form>
    </>);
};
export default EditProduct;