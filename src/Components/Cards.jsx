import React, { Fragment } from 'react'
import './Cards.css'
import img from '../assets/img.png'
import img1 from '../assets/Rectangle.png'
import img2 from '../assets/rec2.png'
import img3 from '../assets/rec3.png'
import img4 from '../assets/rec4.png'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";


const Cards = () => {
    return (
        <Fragment>
            <div className='container-fluid main'>
                <div className='container cards-section'>
                    <div className='cards-heading'>
                        <div className='row'>
                            <h3>Menu Control Panel</h3>
                            <p>Simplified Menu Managemant</p>
                        </div>
                    </div>
                    <div>
                        <div className='add-menu'>
                            <div className='add-menu-r1'>
                                <div className=' add-menu-b1'>
                                    <h6>Please, organize your menus through button bellow</h6>
                                    <button>+Add Menu</button>
                                </div>
                                <div className=' add-menu-b2'>
                                    <img src={img} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='box-heading'>
                        <h3>Menu(Toatal Items)</h3>
                    </div>
                    <div className='cards-container'>
                        <div className='row cards-r1'>
                            <div className='col-lg-3 col-md-6 col-sm-12 card1'>
                                <div className='cards-content'>
                                    <div className='card-img'>
                                        <img src={img1} />
                                    </div>
                                    <div className='cards-data'>
                                        <div className='cards-head'>
                                            <h5>Spicy Beast Burger</h5>
                                            <span>$12.34</span>
                                        </div>
                                        <div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>
                                        <div>
                                            <div className=' btns'>
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
                                <div className='cards-content'>
                                    <div className='card-img' style={{ paddingTop: 5, paddingBottom: 5 }}>
                                        <img src={img2} />
                                    </div>
                                    <div className='cards-data'>
                                        <div className='cards-head'>
                                            <h5>Spicy Beast Burger</h5>
                                            <span>$12.34</span>
                                        </div>
                                        <div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>
                                        <div>
                                            <div className=' btns'>
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
                                <div className='cards-content'>
                                    <div className='card-img' style={{ paddingTop: 10, paddingBottom: 10 }}>
                                        <img src={img3} />
                                    </div>
                                    <div className='cards-data'>
                                        <div className='cards-head'>
                                            <h5>Spicy Beast Burger</h5>
                                            <span>$12.34</span>
                                        </div>
                                        <div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>
                                        <div>
                                            <div className=' btns'>
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
                                <div className='cards-content'>
                                    <div className='card-img' style={{ paddingTop: 33, paddingBottom: 33 }}>
                                        <img src={img4} />
                                    </div>
                                    <div className='cards-data'>
                                        <div className='cards-head'>
                                            <h5>Spicy Beast Burger</h5>
                                            <span>$12.34</span>
                                        </div>
                                        <div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>
                                        <div>
                                            <div className=' btns'>
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
                                <div className='cards-content'>
                                    <div className='card-img'>
                                        <img src={img1} />
                                    </div>
                                    <div className='cards-data'>
                                        <div className='cards-head'>
                                            <h5>Spicy Beast Burger</h5>
                                            <span>$12.34</span>
                                        </div>
                                        <div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>
                                        <div>
                                            <div className=' btns'>
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
                                <div className='cards-content'>
                                    <div className='card-img' style={{ paddingTop: 5, paddingBottom: 5 }}>
                                        <img src={img2} />
                                    </div>
                                    <div className='cards-data'>
                                        <div className='cards-head'>
                                            <h5>Spicy Beast Burger</h5>
                                            <span>$12.34</span>
                                        </div>
                                        <div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>
                                        <div>
                                            <div className=' btns'>
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
                                <div className='cards-content'>
                                    <div className='card-img' style={{ paddingTop: 10, paddingBottom: 10 }}>
                                        <img src={img3} />
                                    </div>
                                    <div className='cards-data'>
                                        <div className='cards-head'>
                                            <h5>Spicy Beast Burger</h5>
                                            <span>$12.34</span>
                                        </div>
                                        <div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>
                                        <div>
                                            <div className=' btns'>
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
                                <div className='cards-content'>
                                    <div className='card-img' style={{ paddingTop: 33, paddingBottom: 33 }}>
                                        <img src={img4} />
                                    </div>
                                    <div className='cards-data'>
                                        <div className='cards-head'>
                                            <h5>Spicy Beast Burger</h5>
                                            <span>$12.34</span>
                                        </div>
                                        <div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                        </div>
                                        <div>
                                            <div className=' btns'>
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

export default Cards
