import React, { Fragment } from 'react'
import './HelpForm.css'

const HelpForm = () => {
    return (
        <Fragment>
            <div className='container-fluid main'>
                <div className='container help-sub-main'>
                    <div className='form-con'>
                        <div>
                            <h3>Fill in the Details</h3>
                        </div>
                        <div>
                            <div className='field'>
                                <div>
                                    <h6>Name</h6>
                                </div>
                                <div>
                                    <input className='help-input' type='text' placeholder='Username' style={{paddingLeft: 10}} />
                                </div>
                            </div>
                            <div className='field'>
                                <div>
                                    <h6>Email</h6>
                                </div>
                                <div>
                                    <input className='help-input' type='text' placeholder='*@domain.com'  style={{paddingLeft: 10}}  />
                                </div>
                            </div>
                            <div className='field'>
                                <div>
                                    <h6>Message</h6>
                                </div>
                                <div>
                                    <textarea
                                        placeholder="0/100"
                                        className="custom-placeholder"
                                        rows="4"
                                        maxLength="500" 
                                        style={{paddingLeft: 10, color: '#C16E31'}} 
                                    />
                                </div>
                            </div>
                            <div className='help-btn'>
                                <div><button>Create Ticket</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default HelpForm
