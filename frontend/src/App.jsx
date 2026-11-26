/*
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  
  return (
    <>
    <form>
      <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input  type="password" placeholder="Enter your password" value={pass} onChange={(e) => setPass(e.target.value)} />
    
      <button type="button" onClick={console.log(email,pass)}>Submit
      </button>
    </form>
    </>
  );
}


export default App;
 
--------------------------------------------------------------------------------
submit not reload
--------------------------------------------------------------------------------

*/
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [formdata, setFormdata] = useState({
    username:" ",
    password:" "
  })
  const navigate = useNavigate();


function handlechange(e){
  e.preventDefault();
  setFormdata({
    ...formdata,
    [e.target.name]:e.target.value
  })
}
  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(formdata.username);
    console.log(formdata.password);
    alert("Login Successfully");
    navigate("/dashboard",{
      state:formdata
    })
  }


  return (
    <>
      <form onSubmit={handlesubmit}>
        <input type="text" required placeholder="Enter your email" name="username" onChange={handlechange}/>
        <input  type="password''"  required placeholder="Enter your password" name="password" onChange={handlechange} />
        <button type="submit.
        ">Submit</button>
      </form>
    </>
  );
}


export default App;




/*
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/login";
import Projects from "./pages/projects";
import Tasks from "./pages/tasks";
import Team from "./pages/team";
import Clients from "./pages/clients";
import Dashboard from "./pages/dashboard";
import Calender from "./pages/calender";
import Settings from "./pages/settings";

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Login/>} />
        <Route path = "/projects" element = {<Projects/>} />
        <Route path = "/tasks" element = {<Tasks/>} />
        <Route path = "/team" element = {<Team/>}/>
        <Route path = "/clients" element = {<Clients/>}/>
        <Route path = "/dashboard" element = {<Dashboard/>}/>
        <Route path = "/calender" element = {<Calender/>}/>
        <Route path = "/settings" element = {<Settings/>}/>



      </Routes>
    </BrowserRouter>
   );
}

export default App;
*/
