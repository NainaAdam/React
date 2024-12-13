import React,{createContext,useState} from "react";
import UseContextChild from "./UseContextChild";
import UseContextChild2 from "./UseContextChild2";

export const context = createContext();
// consider as App.js
export default function UseContextParent(){

    const[string, setString]=useState("");
    const[stote,setStore]=useState([]);

    function handClick(){
        setStore((prev)=>[
            ...prev,string

        ])
        // console.table.(store);

    }
    return(
        <div>
            <label htmlFor="text">Enter the ToDo</label>
            <input type="text"onChange={(e)=>{setString(e.target.value)}}  name="" id="text"/>
            <button onClick={handleClick}>Submit</button>

           <context.Provider value= {store}>
            <ProviderComponent/>
           </context.Provider>
        </div>
    )
}
// consider s routing file
function ProviderComponent(){
    return(
        <div>
            <UseContextChild/>
            <UseContextChild2/>
        </div>
    )
}