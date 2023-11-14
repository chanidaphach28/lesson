import React from "react";
import Image from "next/image";
import '../styles.css';

const Header = () => {
  return (
    <div>
      <div className="border">
        <Image
          src="/image/2590685.png" 
          alt="Hong Hub Logo"
          width={50}
          height={50}
        />
        <p1 className="logo">HONG HUB</p1>
      
      </div>

      <div className='header'>
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
