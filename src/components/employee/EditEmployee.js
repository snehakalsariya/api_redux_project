import axios from "axios";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee } from "../../actions/EmployeeAction";
import { useNavigate } from "react-router-dom";



const EditEmployee = () =>{

    const firstname = useRef();
    const salary = useRef();
    const gender1 = useRef();
    const department = useRef();
    
    const {single} = useSelector(state=>state.employee);

    useEffect(()=>{
        firstname.current.value = single.ename;
        salary.current.value = single.salary;
        setGender(single.gender);
        department.current.value = single.department;

    },[single]);
 
    const [gender,setGender] = useState();
 
   
  
    const onChangeGender = (e) => {
        setGender(e.target.value);  
      };

      const dispatch = useDispatch();
  
    const handleUpdate = (e) =>{
        e.preventDefault();
        var formdata = new FormData();
        formdata.append("eid",single.eid);
        formdata.append("ename",firstname.current.value);
        formdata.append("salary",salary.current.value);
        formdata.append( "gender",gender);
        formdata.append("department", department.current.value);

        dispatch(updateEmployee(formdata));

    }

    const{isupdate} = useSelector(state=>state.employee);
    
    const navigate = useNavigate();

    useEffect(()=>{
        if(isupdate==true)
        {
            navigate("/viewemployee");
        }
        
    },[isupdate]);
    
    return(<>
                <h1>EditEmployee Data</h1>

          

            <form method="post" onSubmit={handleUpdate}>
            Name :<input type="text" ref={firstname}></input><br/>
            Salary :<input type="text" ref={salary}></input><br/>

            Gender : <div onChange={onChangeGender}>
                        <input type="radio" name="gender" value="male" checked={gender=="male"} />Male
                        <input type="radio" name="gender" value="female" checked={gender=="female"} />Female<br/>
                    </div>

            department :<select ref={department}>
                        <option>product</option>
                        <option>employee</option>
                        </select>
                        <br/>
            <br/>
            <button type="submit">Update</button>
            </form>
                </>);
};
export default EditEmployee;