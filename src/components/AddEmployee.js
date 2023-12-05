import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertEmployee } from "../actions/EmployeeAction";



const AddEmployee = () =>{

    const firstname = useRef();
    const salary = useRef();
    const gender1 = useRef();
    const department = useRef();
    
 
 
    const [gender,setGender] = useState();
 
   
    var disatch = useDispatch();

    var{loading,insertmessage} = useSelector(state=>state.employee);
  
    const handlesubmit = () =>{
        alert(gender);
        var  formdata = new FormData();
         formdata.append("ename",  firstname.current.value);
         formdata.append("salary", salary.current.value);
         formdata.append("gender" , gender);
         formdata.append("department",  department.current.value);

        disatch(insertEmployee(formdata))  
         
    
   
    };
    const onChangeGender = (e) => {
        setGender(e.target.value);  
      };
  
    if(loading)
    {
        return(<h1>Loading....</h1>)
    }
    
    return(<>
                <h1>AddEmployee Data</h1>

            <h2>{insertmessage}</h2>    

            <form method="post" onSubmit={handlesubmit}>
            Name :<input type="text" ref={firstname}></input><br/>
            Salary :<input type="text" ref={salary}></input><br/>

            Gender : <div onChange={onChangeGender}>
                        <input type="radio" name="gender" value="male" ref={gender1} />Male
                        <input type="radio" name="gender" value="female" ref={gender1}/>Female<br/>
                    </div>

            department :<select ref={department}>
                        <option>product</option>
                        <option>employee</option>
                        </select>
                        <br/>
            <br/>
            <button type="submit">Add Button</button>
            </form>
                </>);
};
export default AddEmployee;