import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Login() {
  {/*const[email,setEmail] = useState('');
  const[pass,setPass]= useState('');*/}
  const location = useLocation();
  const registerdata = location.state;
  const navigate = useNavigate();
  const[logindata,setlogindata]=useState({
    username:"",
    password:""
  })
  function handlesubmit(e){
    e.preventDefault();
     console.log("Login page",logindata)
     const registerdata=location.state
     console.log("Register", registerdata)
     if(logindata.username===registerdata.name && logindata.password===registerdata.password){
      console.log("if success")
      navigate("/dashboard",{
        state:logindata
      });

     }else{
      console.log("Inpust must valid");
     }
     
  }
  function handlechange(e){
    e.preventDefault()
    setlogindata({
      ...logindata,
      [e.target.name]:e.target.value
  });
  }
  return (
    <div>

     <form onSubmit={handlesubmit}>
       <input
        type="text"
        required
        placeholder="Enter your username"
        name="username"
        onChange={handlechange}
      />

      <input
        type="password"
        required
        placeholder="Enter your password"
        name="password"
        onChange={handlechange}
        
      />
      <button type="submit" >Submit</button>
     </form>
    </div>
  );
}

export default Login;