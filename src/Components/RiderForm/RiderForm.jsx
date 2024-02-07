import React, { Fragment } from 'react'
import './RiderForm.css'

const RiderForm = () => {
    return (
        <Fragment>
            <div className='container-fluid main'>
                <div className='container help-sub-main'>
                    <div className='form-con'>
                        <div>
                            <h3>Add Rider</h3>
                        </div>
                        <div>
                            <div className='field'>
                                <div>
                                    <h6>Name</h6>
                                </div>
                                <div>
                                    <input className='help-input' type='text' placeholder='Enter Name'  style={{paddingLeft: 10}}  />
                                </div>
                            </div>
                            <div className='field'>
                                <div>
                                    <h6>Password</h6>
                                </div>
                                <div>
                                    <input className='help-input' type='Text' placeholder='Enter Password'  style={{paddingLeft: 10}}  />
                                </div>
                            </div>
                            <div className='field'>
                                <div>
                                    <h6>Contact No</h6>
                                </div>
                                <div>
                                    <input className='help-input' type='Text' placeholder='Cell No. of Rider'  style={{paddingLeft: 10}}  />
                                </div>
                            </div>
                            <div className='field'>
                                <div>
                                    <h6>ID</h6>
                                </div>
                                <div>
                                    <input className='help-input' type='text' placeholder='Restaurant ID'  style={{paddingLeft: 10}}  />
                                </div>
                            </div>
                            <div className='add-btn'>
                                <div><button>Add</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default RiderForm