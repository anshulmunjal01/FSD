import React, {useState} from "react";

const State = () => {
    const [total,setTotal]=useState(0);
    const [colour,selectColour]=useState("RED");
  return (
    <div style={{textAlign:"center",justifyContent:"center",marginTop:"91px",marginBottom:"100px",fontSize:"20px",backgroundColor:"lightgoldenrodyellow"}}>
        <br />
        <button onClick={()=>setTotal(total+1)} style={{height:"40px",width:"80px"}}>INCREASE</button>
        <button onClick={()=>setTotal(total-1)} style={{height:"40px",width:"80px"}}>DECREASE</button>
        <h2>val: {total}</h2>
        <br /><br />
        <h1>SELECTED COLOUR IS SHOWN:<div style={{color:colour}}>{colour}</div></h1>
        <button onClick={()=>selectColour("RED")} style={{height:"40PX",width:"80PX"}}>Red</button>
        <button onClick={()=>selectColour("GREEN")} style={{height:"40PX",width:"80PX"}}>Green</button>
        <button onClick={()=>selectColour("YELLOW")} style={{height:"40PX",width:"80PX"}}>Yellow</button>
        <button onClick={()=>selectColour("BLUE")} style={{height:"40PX",width:"80PX"}}>Blue</button>
        <br /><br />
    </div>
  )
}

export default State;