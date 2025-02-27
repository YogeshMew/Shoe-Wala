import { useState } from "react";

const Title = () => {
  
    return (
      <>
      <a href="/">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThc6ANDFSwfcLgpMjG7IJTNz3ZFLP4GooQDu5yCKpIJFsKa-rzk-ZNqQg85SZEMtBUD10"
          alt="food villa logo"
        />
        
      </a>
      </>
      
     

      
    );
  };
  

const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;