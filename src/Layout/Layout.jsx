import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Shared/Navber';


const Layout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;