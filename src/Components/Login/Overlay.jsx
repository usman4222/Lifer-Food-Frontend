import React, { Fragment } from 'react';
import bgImage from '../../assets/bg.jpeg';

const Overlay = () => {
    return (
        <Fragment>
            <div>
                <div className="bg-[url('/src/assets/bg.jpeg')] bg-cover h-[100vh] relative">
                    <div className='absolute bg-black opacity-50 w-full h-full'>
                        <div className='flex justify-center items-center h-[100vh] '>
                            <div>
                                <h3 className='text-center pb-2 font-bold text-3xl text-white'>New Here?</h3>
                                <span className='text-center font-semibold text-base text-white'>Figma ipsum component variant main layer. </span>
                                <div className='flex justify-center pt-10'>
                                    <button className='bg-[#FFB100] px-4 py-2 rounded-xl text-white'>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Overlay;


