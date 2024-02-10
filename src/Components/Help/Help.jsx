import React, { Fragment, useState } from 'react'
import help from '../../assets/help.png'
import help1 from '../../assets/help1.png'
import './Help.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { IoMdPrint } from "react-icons/io";
import Chat from '../Chat/Chat';

const Help = () => {

    const [showOverlay, setShowOverlay] = useState(false);

    const handleHelpB2Click = () => {

        setShowOverlay(true);
    };

    const closeOverlay = () => {
        setShowOverlay(false);
    };

    const [selectedRow, setSelectedRow] = useState(null);

    const answer = [
        { id: 1, answer: "Grilled Chicken Caesar Salad: Fresh twist with grilled chicken, crunchy croutons, and Parmesan on crisp romaine, drizzled with our signature Caesar dressing." },
        { id: 2, answer: "Grilled Chicken Caesar Salad: Fresh twist with grilled chicken, crunchy croutons, and Parmesan on crisp romaine, drizzled with our signature Caesar dressing." },
        { id: 3, answer: "Grilled Chicken Caesar Salad: Fresh twist with grilled chicken, crunchy croutons, and Parmesan on crisp romaine, drizzled with our signature Caesar dressing." },
        { id: 4, answer: "Grilled Chicken Caesar Salad: Fresh twist with grilled chicken, crunchy croutons, and Parmesan on crisp romaine, drizzled with our signature Caesar dressing." },
        { id: 5, answer: "Grilled Chicken Caesar Salad: Fresh twist with grilled chicken, crunchy croutons, and Parmesan on crisp romaine, drizzled with our signature Caesar dressing." },
    ];

    const handleRowClick = (id) => {
        setSelectedRow(id === selectedRow ? null : id);
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
                        <div className='tables flex justify-center align-center pt-5'>
                            <div className='pt-3'>
                                <div>
                                    <h6 className='text-xl font-bold'>FAQS</h6>
                                </div>
                            </div>
                            <table className='row table w-full' style={{ width: 1000 }}>
                                <tbody >
                                    {answer.map((item) => (
                                        <React.Fragment key={item.id}>
                                            <tr className=" border-b">
                                                <td className="px-4 py-2 " style={{ width: 1000 }}>How can I update my restaurant's menu?</td>
                                                <td className="px-4 py-2">
                                                    <IoMdArrowDropdown
                                                        size={20}
                                                        className="cursor-pointer border rounded-full"
                                                        onClick={() => handleRowClick(item.id)}
                                                    />
                                                </td>
                                            </tr>
                                            {selectedRow === item.id && (
                                                <tr>
                                                    <td colSpan="10" className="p-10 " style={{ background: '#FFB100' }}>
                                                        <table className="table-auto w-full">
                                                            <td className="px-4 py-2">{item.answer}</td>
                                                        </table>
                                                    </td>
                                                </tr>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {showOverlay && (
                <div className='overlay' onClick={closeOverlay}>
                    {/* <div className='overlay-content'>
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
                    </div> */}
                </div>
            )}
        </Fragment>
    )
}

export default Help
