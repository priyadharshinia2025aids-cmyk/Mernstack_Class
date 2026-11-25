
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