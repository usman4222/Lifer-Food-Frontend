import React, { Fragment, useState } from 'react'
import help from '../../assets/help.png'
import help1 from '../../assets/help1.png'
import './Help.css'

const Help = () => {

    const [showOverlay, setShowOverlay] = useState(false);
    const [agentInfo, setAgentInfo] = useState({ name: '', email: '', id: '' });

    const handleHelpB2Click = () => {
        // Simulate fetching agent information (replace with your actual logic)
        // For demonstration purposes, set default values.
        const agent = { username: 'Muhammad Irfan', email: 'Irfan@gmail.com', id: 'm.irfan 12' };

        setAgentInfo(agent);
        setShowOverlay(true);
    };

    const closeOverlay = () => {
        setShowOverlay(false);
    };

    return (
        <Fragment>
            <div className='conatiner-fluid main'>
                <div className='container'>
                    <div className='help-head'>
                        <h3>Help and Support</h3>
                        <p>We've got your back</p>
                    </div>
                    <div className='help-mid'>
                        <div className='row'>
                            <div className='col-lg-6 help-b1'>
                                <div className='help-b1-content'>
                                    <div>
                                        <img src={help} />
                                    </div>
                                    <div>
                                        <h6>Create Ticket</h6>
                                        <p>To initiate a one to one chat with the support team, please click on this Button</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 help-b1'>
                                <div className='help-b2-content' onClick={handleHelpB2Click}>
                                    <div>
                                        <img src={help1} />
                                    </div>
                                    <div>
                                        <h6>Agent</h6>
                                        <p>To initiate a one-to-one chat with the support team, please click on this Button</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row table'>
                            <div className="bg-white shadow-xl py-2 rounded-xl md:w-[45%] w-full flex flex-col">
                                <h1 className="text-2xl font-bold text-gray-600 pl-10">FAQS</h1>
                                <ul className="pt-3 text-gray-600 w-full">
                                    <li className="border-b border-gray-300 font-semibold text-lg pl-5">#4365</li>
                                    <li className="border-b border-gray-300 font-semibold text-lg pl-5">#4365</li>
                                    <li className="border-b border-gray-300 font-semibold text-lg pl-5">#4365</li>
                                    <li className="border-b border-gray-300 font-semibold text-lg pl-5">#4365</li>
                                    <li className="border-b border-gray-300 font-semibold text-lg pl-5">#4365</li>
                                    <li className="border-b border-gray-300 font-semibold text-lg pl-5">#4365</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showOverlay && (
                <div className='overlay' onClick={closeOverlay}>
                    <div className='overlay-content'>
                        <div>
                            <h6>Name:</h6>
                            <p>{agentInfo.username}</p>
                        </div>
                        <div>
                            <h6>Email:</h6>
                            <p>{agentInfo.email}</p>
                        </div>
                        <div>
                            <h6>Skype ID:</h6>
                            <p>{agentInfo.id}</p>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    )
}

export default Help
