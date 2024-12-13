import React,{useCallback,useRef,useState} from "react";

export default function useCallbackHook(){

    const [color,setColor]= useState("");
    const disp = useRef()

    const handleChangeColor=useCallback(()=>{
        disp.current.style.background=color;
    },[color]);
    return
    (
        <div ref={disp} style={{position:'absolute',width:'100%',height:'100%'}}>
            <label htmlFor="color">Enter a color</label>
            <input type="text"  onChange={(e)=>{setColor(e.target.value)}} name="" id="color"/>
            <button onClick={handleChangeColor}>Change color</button>
        </div>
    )
}