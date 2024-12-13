import React from "react";
import ChildProp from '.ChildProp';

function ParentProp(){
    const Royal_Enfield = ["Hunter 350","Himalayan 450","Scram 4","Classic 350","Gureilla 450","GT650","Intercepetor","ShotGun6650","Meteor350","Supermeteor650"

    ]
    return( 
        <div>
            <h1>Parent file</h1>
            <ol style={{textAlign:"left"}}>
                {
                    Royal_Enfield.map((item)=>{
                        return(
                            <li>{item}</li>
                        )
                    }
                    )
                }

            </ol>
            <ChildProp RE ={Royal_Enfield}></ChildProp>
        </div>
    )
}
export default ParentProp