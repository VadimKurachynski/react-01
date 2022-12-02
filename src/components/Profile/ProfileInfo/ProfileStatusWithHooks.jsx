import React, {useState} from "react";







const ProfileStatusWithHooks =(props)=>{

    //   let stateWithSetState=useState(false);
    let[editMode,setEditMode]=useState(false);


    const activateEditMode = () => {
        setEditMode(true);
        }


    const deactivateEditMode = () => {
        setEditMode(false);
      //  props.updateStatus(this.state.status);
    }

    const onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value

        });
    }





    return (
            <div>
                {!editMode &&
                    <div><div>статус: </div><span onDoubleClick={activateEditMode}>{props.status} </span></div>
                }
                {editMode &&
                    <div>
                        <input  autoFocus={true} onBlur={deactivateEditMode}/>

                    </div>
                }
            </div>
        )

}

export default ProfileStatusWithHooks;