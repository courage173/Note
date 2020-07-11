import React from 'react';
import Sidebar from '../sidebar';
import './layoutStyle.css';

const Layout = (props) => {
    return (
        <div className='layout-wrapper'>
            <Sidebar />
            <div className='layout-right-side'>{props.children}</div>
        </div>
    )
}

export default Layout
