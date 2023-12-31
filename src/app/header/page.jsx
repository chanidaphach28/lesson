import React from "react";
import Image from "next/image";
import '../styles.css';

const Header = () => {
  return (
    <div>
      <div className="border">
        <div className="icon">
          <Image
            src="/image/2590685.png" 
            alt="Hong Hub Logo"
            width={50}
            height={50}
          />
        </div>
        <span className="logo">HONG HUB</span>
      </div>

      <div className='header'>
        <div className='dropbar'>
        
          <div class="dropdown">
            <button class="btn"><Image
            src="/image/2311531.png" 
            alt="dropdown"
            width={50}
            height={50}
          /></button>
            <div class="dropdown-menu">
            <a href="#">PROMOTION</a>
            <a href="#">LOCATION</a>
            <a href="#">PRICE RANG</a>
            <a href="#">HELP</a>
            </div>
          </div>
        </div>
        <span className='title1'>HOME</span>
        <span className='title2'>NEAR ME</span>
        <span className='title3'>ROOM</span>
        <span className='title4'>BOOKING</span>
        <span className='title5'>ABOUT US</span>
      </div>
    </div>
  );
};

export default Header;
