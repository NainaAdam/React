import React from "react";

function ChildProp(pro){
    const RE_Models = pro.RE;
    return (
        <div>
        <h1>Child file</h1>
        <ul style={{textAlign:"left"}}>
            {
                RE_Models.map((item)=>{
                    return(
                        <li>{item}</li>
                    )
                }
                )
            }

        </ul>
        </div>
    )
}
export default ChildProp