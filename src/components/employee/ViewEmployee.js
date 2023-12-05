import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, getAllemployee, getsingleEmployee } from "../../actions/EmployeeAction";
import { useNavigate } from "react-router-dom";

const ViewEmployee = () =>{


    var {loading,EmployeeData} = useSelector(state=>state.employee)
 
    var dispatch = useDispatch();

    useEffect(() =>{
      dispatch(getAllemployee());
    },[dispatch]);

   const navigate = useNavigate()

    const handleDelete = (eid) =>{
      dispatch(deleteEmployee(eid));
    };


    const handleUpdate = (eid) =>{
      dispatch(getsingleEmployee(eid));
      navigate("/editemployee");
    };


    if(loading==true)
    {
        return(<>
         <h1>Please Wait....</h1>
        </>)
    }

    return(<>
     <h1>All Employee</h1>
     <table className="table table-bordererd">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Department</th>
                <th>Gender</th>
                <th>Action</th>

            </tr>
        </thead>
        <tbody>
            {
                 EmployeeData.map((obj,index)=>{
                   return(<>
                     <tr>
                        <td>{obj.eid}</td>
                        <td>{obj.ename}</td>
                        <td>{obj.salary}</td>
                        <td>{obj.department}</td>
                        <td>{obj.gender}</td>
                        <button type="button" onClick={(e)=>handleDelete(obj.eid)}>Delete</button>
                        <button type="button" onClick={(e)=>handleUpdate(obj.eid)}>Update</button>
                     </tr>
                   </>)
                 })
            }
        </tbody>
     </table>
    </>)
};
export default ViewEmployee;