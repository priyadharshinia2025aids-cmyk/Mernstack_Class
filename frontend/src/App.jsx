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


import { useState } from "react";

function App() {
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

export default App;
*/

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/login";
import Projects from "./pages/projects";
import Tasks from "./pages/tasks";

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Login/>} />
        <Route path = "/projects" element = {<Projects/>} />
        <Route path = "/tasks" element = {<Tasks/>} />

      </Routes>
    </BrowserRouter>
   );
}

export default App;
