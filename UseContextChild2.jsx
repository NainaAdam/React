import React,{useContext} from "react";
import {Context} from './UseContextParent'

export default function UseContextChild2(){
    return(
        <div>
            <h1>Child 2 file</h1>
            <ul>
                {
                    data2.map((item,index)=>{
                        return(
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
