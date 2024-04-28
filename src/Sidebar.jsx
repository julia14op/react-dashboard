import React from 'react';
import { FaHome, FaChartPie, FaEnvelope, FaWallet } from 'react-icons/fa';
 // Make sure to create this CSS file

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <FaHome />
       
      </div>
      <div className="sidebar-item">
        <FaChartPie />
        
      </div>
      <div className="sidebar-item">
        <FaEnvelope />
      
      </div>
      <div className="sidebar-item">
        <FaWallet />
        
      </div>
    </div>
  );
}

export default Sidebar
