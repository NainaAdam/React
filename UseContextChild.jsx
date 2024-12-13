import React,{useContext} from "react";
import {Context} from './UseContextParent';

export default function UseContextChild(){
    return(
        <div>
            <h1>Child 1 file</h1>
            <ol>
                data1.map((item,index)=>{
                    return(
                        <li key= {index}>{item}</li>
                    )
                }
                )
            </ol>
        </div>
    )
}