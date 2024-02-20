import React, { Fragment } from 'react'
import money from '../../assets/money.png'
import './Revenue.css'
import { FaArrowUpLong } from "react-icons/fa6";
import icon from '../../assets/icon.png'
import graph from '../../assets/graph.png'
import { IoArrowUpCircleSharp } from "react-icons/io5";



const Revenue = () => {
    return (
        <Fragment>
            <div className='container-fluid main'>
                <div className='container'>
                    <div className='revenue-content'>
                        <div className='revenue-top'>
                            <h4>Revenue</h4>
                            <h6>Tarck your Earning</h6>
                        </div>
                        <div className='revenue-mid'>
                            <div className='row revenue-mid-r1'>
                                <div className='col-lg-6 revenue-b1'>
                                    <div className='revenue-b1-left'>
                                        <div>
                                            <h5>Sales & Costs Today</h5>
                                            <p>Month, Jan 28th</p>
                                        </div>
                                        <div>
                                            <h2>$3k</h2>
                                        </div>
                                        <div>
                                            <span><FaArrowUpLong />8.56k</span> <p>vs last 7 days</p>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-lg-6  revenue-b2'>
                                    <div className='revenue-b2-b'>
                                        <div>
                                            <img src={icon} />
                                        </div>
                                        <div>
                                            <h2>$458k</h2>
                                            <h6>Monthly Revenue</h6>
                                            <span><IoArrowUpCircleSharp />25%(30days)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-3'>
                                    <div className='revenue-last'>
                                        <div>
                                            <div className='add-menu ' style={{ background: '#A3BB98' }}>
                                                <div className='add-menu-r1'>
                                                    <div className=' add-menu-b1'>
                                                        <h6>Add to Today's Revenue through this button</h6>
                                                        <button>+Add Menu</button>
                                                    </div>
                                                    <div className=' add-money-b2'>
                                                        <img src={money} />
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
            </div>
        </Fragment>
    )
}

export default Revenue
