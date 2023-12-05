import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAllProduct, getSingleProduct } from "../../actions/ProductActions";
import { useNavigate } from "react-router-dom";

const ViewProduct = () => {

    var {loading,productData} = useSelector(state=>state.product)
    var dispatch = useDispatch();

    useEffect(()=>{
       dispatch(getAllProduct());
    },[dispatch]);

    const navigate = useNavigate();


    const handleDelete = (pid) => {
        dispatch(deleteProduct(pid));
    };

    const handleUpdate = (pid) => {
        dispatch(getSingleProduct(pid));
        navigate("/editproduct");
    };


    if(loading==true)
    {
        return (<><h1>Please Wait...</h1></>);
    }
    return (<>
        <h1>All Products</h1>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                {
                    productData.map((obj,index)=>{
                        return(<>
                            <tr>
                                <td>{obj.pname}</td>
                                <td>{obj.qty}</td>
                                <td>{obj.price}</td>
                                <button type="button" onClick={(e)=>handleDelete(obj.pid)}>Delete</button>
                                <button type="button" onClick={(e)=>handleUpdate(obj.pid)}>Update</button>
                            </tr>
                        </>);
                    })
                }
            </tbody>
        </table>
    </>);
};

export default ViewProduct;