import React, { Fragment } from 'react'
import './Rider.css'
import img0 from '../../assets/obj.png'
import b1 from '../../assets/b1.png'
import b2 from '../../assets/b2.png'
import b3 from '../../assets/b3.png'
import b4 from '../../assets/b4.png'
import b5 from '../../assets/b5.png'
import b6 from '../../assets/b6.png'
import b7 from '../../assets/b7.png'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";


const Rider = () => {
    return (
        <Fragment>
            <div className='container-fluid main'>
                <div className='container cards-section'>
                    <div className='cards-heading'>
                        <div className='row'>
                            <h3>Rider Control Panel</h3>
                            <p>Manage your Rider ease!</p>
                        </div>
                    </div>
                    <div className='form'>
                        <div className='add-rider'>
                            <div className='add-rider-r1'>
                                <div className=' add-rider-b1'>
                                    <h6>Please, organize your menus through button bellow</h6>
                                    <button>+Add Menu</button>
                                </div>
                                <div className=' add-rider-b2'>
                                    <img src={img0} />
                                </div>
                            </div>
                        </div>
                        {/* <div className='hidden-content'>
                            <div className='nam'>
                                <div className='name'>
                                    <p>Name</p>
                                    <input type='password' placeholder='Enter Name' />
                                </div>
                            </div>
                            <div className='nam'>
                                <div className='password'>
                                    <p>Password</p>
                                    <input type='password' placeholder='Enter Password' />
                                </div>
                            </div>
                            <div className='nam'>
                                <div className='contact'>
                                    <p>Contact No.</p>
                                    <input type='number' placeholder='Cell no. of Rider' />
                                </div>
                            </div>
                            <div className='nam'>
                                <div className='id'>
                                    <p>ID</p>
                                    <input type='number' placeholder='Restaurant ID' />
                                </div>
                            </div>
                            <div className='up'>
                                <div className='pic'>
                                    <p style={{ width: 100 }}>Upload Picture</p>
                                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><button>Browse</button></div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className='box-heading'>
                        <h3>All Riders</h3>
                    </div>
                    <div className='cards-container'>
                        <div className='row cards-r1'>
                            <div className='col-lg-3 col-md-6 col-sm-12 card1'>
                                <div className='card-content'>
                                    <div className='card-img'>
                                        <img src={b1} />
                                    </div>
                                    <div className='cards-data'>
                                        <div className='rider-data'>
                                            <div>
                                                <h6>Name:</h6>
                                                <h6>Password:</h6>
                                                <h6>Contact No:</h6>
                                                <h6>ID:</h6>
                                            </div>
                                            <div>
                                                <h6>Randy Curtis</h6>
                                                <h6>**********</h6>
                                                <h6>+92 3093432454</h6>
                                                <h6>#90354</h6>
                                            </div>
                                        </div>
                                        <div style={{ paddingBottom: 20 }}>
                                            <div className=' btn' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <div className=' btns-1'>
                                                    <button><span><FiEdit /></span>Edit</button>
                                                </div>
                                                <div className=' btns-2'>
                                                    <button><span><RiDeleteBin6Line /></span>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12 card1'>
                                <div className='card-content'>
                                    <div className='card-img' >
                                        <img src={b2} />
                                    </div>
                                    <div className='cards-data'>
                                        <div className='rider-data'>
                                            <div>
                                                <h6>Name:</h6>
                                                <h6>Password:</h6>
                                                <h6>Contact No:</h6>
                                                <h6>ID:</h6>
                                            </div>
                                            <div>
                                                <h6>Randy Curtis</h6>
                                                <h6>**********</h6>
                                                <h6>+92 3093432454</h6>
                                                <h6>#90354</h6>
                                            </div>
                                        </div>
                                        <div style={{ paddingBottom: 20 }}>
                                            <div className=' btn' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <div className=' btns-1'>
                                                    <button><span><FiEdit /></span>Edit</button>
                                                </div>
                                                <div className=' btns-2'>
                                                    <button><span><RiDeleteBin6Line /></span>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12 card1'>
                                <div className='card-content'>
                                    <div className='card-img' >
                                        <img src={b3} />
                                    </div>
                                    <div className='cards-data'>
                                        <div className='rider-data'>
                                            <div>
                                                <h6>Name:</h6>
                                                <h6>Password:</h6>
                                                <h6>Contact No:</h6>
                                                <h6>ID:</h6>
                                            </div>
                                            <div>
                                                <h6>Randy Curtis</h6>
                                                <h6>**********</h6>
                                                <h6>+92 3093432454</h6>
                                                <h6>#90354</h6>
                                            </div>
                                        </div>
                                        <div style={{ paddingBottom: 20 }}>
                                            <div className=' btn' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <div className=' btns-1'>
                                                    <button><span><FiEdit /></span>Edit</button>
                                                </div>
                                                <div className=' btns-2'>
                                                    <button><span><RiDeleteBin6Line /></span>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12 card1'>
                                <div className='card-content'>
                                    <div className='card-img'>
                                        <img src={b4} />
                                    </div>
                                    <div className='cards-data'>
                                        <div className='rider-data'>
                                            <div>
                                                <h6>Name:</h6>
                                                <h6>Password:</h6>
                                                <h6>Contact No:</h6>
                                                <h6>ID:</h6>
                                            </div>
                                            <div>
                                                <h6>Randy Curtis</h6>
                                                <h6>**********</h6>
                                                <h6>+92 3093432454</h6>
                                                <h6>#90354</h6>
                                            </div>
                                        </div>
                                        <div style={{ paddingBottom: 20 }}>
                                            <div className=' btn' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <div className=' btns-1'>
                                                    <button><span><FiEdit /></span>Edit</button>
                                                </div>
                                                <div className=' btns-2'>
                                                    <button><span><RiDeleteBin6Line /></span>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row cards-r1'>
                            <div className='col-lg-3 col-md-6 col-sm-12 card1'>
                                <div className='card-content'>
                                    <div className='card-img'>
                                        <img src={b5} />
                                    </div>
                                    <div className='cards-data'>
                                        <div className='rider-data'>
                                            <div>
                                                <h6>Name:</h6>
                                                <h6>Password:</h6>
                                                <h6>Contact No:</h6>
                                                <h6>ID:</h6>
                                            </div>
                                            <div>
                                                <h6>Randy Curtis</h6>
                                                <h6>**********</h6>
                                                <h6>+92 3093432454</h6>
                                                <h6>#90354</h6>
                                            </div>
                                        </div>
                                        <div style={{ paddingBottom: 20 }}>
                                            <div className=' btn' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <div className=' btns-1'>
                                                    <button><span><FiEdit /></span>Edit</button>
                                                </div>
                                                <div className=' btns-2'>
                                                    <button><span><RiDeleteBin6Line /></span>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12 card1'>
                                <div className='card-content'>
                                    <div className='card-img' >
                                        <img src={b6} />
                                    </div>
                                    <div className='cards-data'>
                                        <div className='rider-data'>
                                            <div>
                                                <h6>Name:</h6>
                                                <h6>Password:</h6>
                                                <h6>Contact No:</h6>
                                                <h6>ID:</h6>
                                            </div>
                                            <div>
                                                <h6>Randy Curtis</h6>
                                                <h6>**********</h6>
                                                <h6>+92 3093432454</h6>
                                                <h6>#90354</h6>
                                            </div>
                                        </div>
                                        <div style={{ paddingBottom: 20 }}>
                                            <div className=' btn' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <div className=' btns-1'>
                                                    <button><span><FiEdit /></span>Edit</button>
                                                </div>
                                                <div className=' btns-2'>
                                                    <button><span><RiDeleteBin6Line /></span>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12 card1'>
                                <div className='card-content'>
                                    <div className='card-img' >
                                        <img src={b7} />
                                    </div>
                                    <div className='cards-data'>
                                        <div className='rider-data'>
                                            <div>
                                                <h6>Name:</h6>
                                                <h6>Password:</h6>
                                                <h6>Contact No:</h6>
                                                <h6>ID:</h6>
                                            </div>
                                            <div>
                                                <h6>Randy Curtis</h6>
                                                <h6>**********</h6>
                                                <h6>+92 3093432454</h6>
                                                <h6>#90354</h6>
                                            </div>
                                        </div>
                                        <div style={{ paddingBottom: 20 }}>
                                            <div className=' btn' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <div className=' btns-1'>
                                                    <button><span><FiEdit /></span>Edit</button>
                                                </div>
                                                <div className=' btns-2'>
                                                    <button><span><RiDeleteBin6Line /></span>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 col-sm-12 card1'>
                                <div className='card-content'>
                                    <div className='card-img'>
                                        <img src={b1} />
                                    </div>
                                    <div className='cards-data'>
                                        <div className='rider-data'>
                                            <div>
                                                <h6>Name:</h6>
                                                <h6>Password:</h6>
                                                <h6>Contact No:</h6>
                                                <h6>ID:</h6>
                                            </div>
                                            <div>
                                                <h6>Randy Curtis</h6>
                                                <h6>**********</h6>
                                                <h6>+92 3093432454</h6>
                                                <h6>#90354</h6>
                                            </div>
                                        </div>
                                        <div style={{ paddingBottom: 20 }}>
                                            <div className=' btn' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <div className=' btns-1'>
                                                    <button><span><FiEdit /></span>Edit</button>
                                                </div>
                                                <div className=' btns-2'>
                                                    <button><span><RiDeleteBin6Line /></span>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Rider
