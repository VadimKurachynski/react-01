import React, {useState} from "react";

const ProfileStatusWithHooks =(props)=>{

    let stateWithSetState=useState(false);
   let editMode=stateWithSetState[0];
    let setEditMode=stateWithSetState[1];
    return (
            <div>
                {!editMode &&
                    <div><div>статус: </div><span >{props.status} </span></div>
                }
                {editMode &&
                    <div>
                        <input  autoFocus={true} />

                    </div>
                }
            </div>
        )

}

export default ProfileStatusWithHooks;