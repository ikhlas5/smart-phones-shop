import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer/Footer';
import Navbar from '../../Shared/Header/NavBar/Navbar';

const Dashbord = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center">
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
     
      <li>
        <Link to='/dashboard/myorder'>My Orders</Link>
      </li>
      <li>
        <Link to=''>My</Link>
      </li>
    </ul>
  
  </div>
</div>
            <Footer></Footer>
        </div>
    );
};

export default Dashbord;