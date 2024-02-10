import React, { Fragment } from 'react';

const HelpForm = () => {
  return (
    <Fragment>
      <div className='container-fluid main'>
        <div className='container help-sub-main'>
          <div className='form-con bg-white rounded-2xl p-8'>
            <div>
              <h3 className='text-center text-C16E31 text-4xl py-5'>Fill in the Details</h3>
            </div>
            <div>
              <div className='field'>
                <div>
                  <h6 className='text-C16E31 text-sm'>Name</h6>
                </div>
                <div>
                  <input
                    className='help-input border-C16E31 border-solid border-1 rounded-md p-1 w-56'
                    type='text'
                    placeholder='Username'
                  />
                </div>
              </div>
              <div className='field'>
                <div>
                  <h6 className='text-C16E31 text-sm'>Email</h6>
                </div>
                <div>
                  <input
                    className='help-input border-C16E31 border-solid border-1 rounded-md p-1 w-56'
                    type='text'
                    placeholder='*@domain.com'
                  />
                </div>
              </div>
              <div className='field'>
                <div>
                  <h6 className='text-C16E31 text-sm'>Message</h6>
                </div>
                <div>
                  <textarea
                    placeholder="0/100"
                    className="custom-placeholder border-C16E31 border-solid border-1 rounded-md p-1 w-56 text-C16E31"
                    rows="4"
                    maxLength="500"
                  />
                </div>
              </div>
              <div className='help-btn flex items-center justify-center'>
                <div>
                  <button className='bg-C16E31 py-2 px-10 text-white font-semibold rounded-lg'>
                    Create Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HelpForm;
