import React from 'react'
import aboutimg from "./assets/product1.png";
// import mauthn from "./assets/mauthn.png";
import verify from "./assets/verify.svg"
import dataMonitor from "./assets/data-monitor.png"
import geoImg from "./assets/download.png"

function Product() {
    return (
      <>
      <div className='product-main'>
        <div className='product-sub-txt'>
          <br />
          <h1>Mukham App</h1>
          <h3>Application integrated to remind and process the flow of marking attendance with simplified UI which takes less than 10 seconds to mark attendance</h3>
        </div>
        <div className='product-sub-img'>
          <img src={aboutimg} alt="" />
        </div>
      </div>

      <div className='product-main'>
        <div className='product-sub-txt'>
          <br />
          <h1>Mukham Features</h1>
          <h3>Everything you need</h3>
        </div>
        <div className='product-sub-img-2'>
          <div>
            <h3><strong>Passwordless Authentication</strong></h3>
            <p>You dont need to remember tones of passwords anymore. Mukham is built to make authentication seamless through FACIAL RECOGNITION</p>
          </div>
          <div className='product-img-verify'> 
          <img src={verify} alt="" />
          
          </div>
        </div>
      </div>

      <div className='product-main'>
        <div className='product-sub-img-2'>
        <img src={geoImg} alt="" className='product-img'/>
          <div>
            <h3><strong>Geo Fencing</strong></h3>
            <p>A virtual perimeter for real-world location to eliminate the possibility of location spoofing and help to enhance tracking</p>
          </div>
        </div>
      </div>

      <div className='product-main'>
        <div className='product-sub-img-2'>
          <div>
            <h3><strong>Data Management</strong></h3>
            <p>Handles whole organization employees data and to compute statics in a large scale</p>
          </div>
          <img src={dataMonitor} alt="" className='product-img'/>
        </div>
      </div>
      </>
    );
}

export default Product;
