/*
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input  type="password" placeholder="Enter your password" value={pass} onChange={(e) => setPass(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
*/

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  
  //const[password,setPassword]=useState("");
  //const[email,setEmail]=useState("");
  const[formdata,setFormdata]=useState({username:"",password:""})  
  const navigate=useNavigate();
  function formdisplay(e)
  {
   e.preventDefault();
   setFormdata({
      ...formdata,
      [e.target.name]:[e.target.value]
   })

}
  const print=(e)=>
  {
     e.preventDefault()
     console.log(formdata.username,formdata.password);
     alert("Log in successfull");
     navigate("/dashboard",
      {state:formdata}
     )
  }
  return ( 
       
      <form onSubmit={print}>
         {/*<h4>Enter Password:</h4>
         <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
         <br/>
         <h4>Enter Email:</h4>
         <input type="Email" placeholder="mail" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>*/}
        {/* <button type="submit" onClick={()=>{console.log(email,password)}}>Submit</button>
        */}
        <h4>Username:</h4>
        <input type="text" placeholder="enter the username" name="username" onChange={formdisplay}/>
        <br/>
        <h4>Password:</h4>
        <input type="password" placeholder="enter the password" name="password" onChange={formdisplay}/>
        <button type="submit">Submit</button>
      </form>
    
      
     );
}

export default Login;