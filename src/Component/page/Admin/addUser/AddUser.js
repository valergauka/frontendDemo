import React from "react";
import './AddUser.css'
import Buttons from "../../../UIComponent/buttons/Buttons"

const AddUser = () => {
    return (
        <div className="content">
            <div className="formMenuUser">
                <h5 className="title">Add User</h5>
                <div className="group">
                    <input type='text' className="input" required='true' />
                    <label className="label">Name</label>
                </div>
                <div className="group">
                    <input type='email' className="input" required='true' />
                    <label className="label">Email</label>
                </div>
                <div className="group">
                    <input type='password' className="input" required='true' />

                    <label className="label">Password</label>
                </div>
                <div className="buttonAdd">
                    Add
                </div>
            </div>
            <Buttons/>
        </div>
    );
}

export default AddUser;