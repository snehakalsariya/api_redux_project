import { useRef } from "react";
import { useDispatch } from "react-redux";
import { getLogin } from "./actions/AuthenticAction";

const Login = () =>{
 
    const email = useRef();
    const pass = useRef();


    const dispatch = useDispatch();

    const handleclick = (e) =>{
        e.preventDefault();
        var params ={
            "name":email.current.value,
            "password":pass.current.value,
            "device_token":"12345678",
            "device_os":"android"
        };
        dispatch(getLogin(params));
      
    };



    return(<>

    <form method="post" onSubmit={handleclick}>
    Email <input type="text" ref={email}></input><br/>
    Password:- <input type="number" ref={pass}></input><br/>
    <br/>
    <button type="submit">Click</button>
    </form>
    </>);
       
   

};
export default Login;