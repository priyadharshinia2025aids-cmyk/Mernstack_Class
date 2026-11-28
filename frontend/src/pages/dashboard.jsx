import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
    const location = useLocation();
    const[userdata,setUserdata] = useState("");
    const[count,setCount] =useState(0);
    function displaydata(){
        setUserdata(location.state);
        console.log(userdata)
    }
    useEffect(()=>{
        setUserdata(count+1);
    },[])
    console.log(count)
    return ( 
        <div>
            <>{userdata.username} {userdata.password}</>
            <button onClick={displaydata}> button</button>
        </div>
     );
}

export default Dashboard;