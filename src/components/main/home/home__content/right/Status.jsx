import React from "react";
import s from './rightContent.module.css';


class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    
    }

    activateEditMode = () => {
        
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        
        this.setState({
            editMode: false
        })

        this.props.updateStatus(this.state.status)
        
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {


        let status =  !this.state.editMode ?
            <span onDoubleClick={this.activateEditMode} > { this.props.status ? this.props.status : "....."} </span>

            : <input    type="text" 
                        value={this.state.status} 
                        autoFocus  
                        onBlur={this.deActivateEditMode}
                        onChange={this.onStatusChange}
                />



        return (


            <p className={s.profile__status}>

                {status }
                <span>:Status</span>

            </p>
        )
    }
}


export default Status