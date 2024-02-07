import React, { Fragment, useState } from 'react'
import './AddMenu.css'
import { RiUploadCloudFill } from "react-icons/ri";



const AddMenu = () => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <Fragment>
      <div className='container-fluid main'>
        <div className='container help-sub-main'>
          <div className='form-container'>
            <div>
              <h3>Add Menu Item</h3>
            </div>
            <div>
              <div className='Menu-field'>
                <div>
                  <h6>Product Name</h6>
                </div>
                <div>
                  <input type='text' placeholder='e.g., BBQ Cheese Burger' style={{ paddingLeft: 10, color: '#000', fontWeight: 600 }} />
                </div>
              </div>
              <div className='Menu-field'>
                <div>
                  <h6>Product Price</h6>
                </div>
                <div>
                  <input type='text' placeholder='e.g., $12.67' style={{ paddingLeft: 10, color: '#000', fontWeight: 600 }} />
                </div>
              </div>
              <div className='Menu-field'>
                <div>
                  <h6>Category</h6>
                </div>
                <div>
                  <input type='text' placeholder='Select Category' style={{ paddingLeft: 10, color: '#000', fontWeight: 600 }} />
                </div>
              </div>
              <div className='Menu-field'>
                <div>
                  <h6>Ingredient</h6>
                </div>
                <div>
                  <input type='text' placeholder='Select Ingredients' style={{ paddingLeft: 10, color: '#000', fontWeight: 600 }} />
                </div>
              </div>
              <div className='Menu-radio'>
                <div>
                  <h6>Availability</h6>
                </div>
                <div className='radio'>
                  <div style={{ paddingRight: 10 }}>
                    <label className="radio-label" >
                      <input type="radio" className="input-radio" name="pilih" />
                      <span className="radio-custom"></span> Yes
                    </label>
                  </div>
                  <div>
                    <label className="radio-label">
                      <input type="radio" className="input-radio" checked name="pilih" />
                      <span className="radio-custom"></span> No
                    </label>
                  </div>
                </div>
              </div>
              <div className='Menu-field'>
                <div>
                  <h6>Product Description</h6>
                </div>
                <div>
                  <textarea
                    placeholder="0/100"
                    className="custom-place"
                    rows="3"
                    maxLength="500"
                    style={{ paddingLeft: 10, color: '#000', fontWeight: 600 }}
                  />
                </div>
              </div>
              <div className='Menu-field'>
                <div>
                  <h6>Upload Image</h6>
                </div>
                <div className="Neon Neon-theme-dragdropbox">
                  <input
                    onChange={handleImageChange}
                    style={{ zIndex: 999, opacity: 0, width: '320px', height: '200px', position: 'absolute', right: '0', left: '0', marginRight: 'auto', marginLeft: 'auto' }}
                    name="files[]"
                    id="filer_input2"
                    multiple="multiple"
                    type="file"
                  />
                  <div className="Neon-input-dragDrop">
                    <div className="Neon-input-inner">
                      <div className="Neon-input-icon">
                        <i className="fa fa-file-image-o"></i>
                      </div>
                      <div className="Neon-input-text">
                        <div>
                          <RiUploadCloudFill />
                          {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />}
                        </div>
                      </div>
                      <label htmlFor="filer_input2" >Select Image</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='menu-btn'>
                <div><button>Add Item</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AddMenu
