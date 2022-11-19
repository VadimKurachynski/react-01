import React from "react";

class ProfileStatus extends React.Component {
state={
    editMode: false
}

activateEditMode(){
    this.setState({
        editMode:true
    })

}
    render() {
        return (

            <div>
                {!this.state.editMode &&
                    <div><span onClick={this.activateEditMode.bind(this)}>{this.props.status}</span></div>
                }
                {this.state.editMode &&
                    <div><input value={this.props.status}/></div>
                }

            </div>
        )
    }
}


export default ProfileStatus;