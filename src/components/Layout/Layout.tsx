import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import s from "./Layout.module.scss"

const Layout = () => {
    return (
    <div className={s.layout}>
        <Header/>
        <Outlet/>
    </div>
    );
};

export default Layout;