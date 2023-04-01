import React from 'react';
import './index.css'

function Layout({ children }) {


  return (
    <div className='container'>
      <div className='header'>
        {window.location.pathname === '/dashboard' ? (
          <button className='button' onClick={() =>  window.location.href = "/add-pirate"}>
            Add Pirate
          </button>
        ): window.location.pathname === '/add-pirate' ? (
          <button className='button' onClick={() =>  window.location.href = "/dashboard"}>
            Crew Board
          </button>
        ) : ""
        }


      </div>
        {children}
    </div>
  );
}

export default Layout;