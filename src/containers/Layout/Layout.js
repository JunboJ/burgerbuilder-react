import React, { useState } from 'react';

import classes from './Layout.module.css';
import NavBar from '../../components/Nav/NavBar/NavBar';
import SideBar from '../../components/Nav/SideBar/SideBar';

const Layout = props => {
    const [showSideBarState, setShowSideBarState] = useState({
        showSideBar: false
    });

    const toggleSideBar = () => {
        setShowSideBarState({
            showSideBar: !showSideBarState.showSideBar
        });
    };

    const mainClass = showSideBarState.showSideBar ? classes.main_showSideBar : classes.main_hideSideBar;

    return (
        <div className={mainClass}>
            <header className={classes.Header} style={{ diaplay: 'flex', flexBasis: '100%' }}>
                <SideBar show={showSideBarState.showSideBar} clicked={toggleSideBar}/>
                <NavBar showSideBar={showSideBarState.showSideBar} logoClicked={toggleSideBar}/>
            </header>
            <main className={classes.Content}>
                {props.children}
            </main>
            <footer className={classes.Footer}>
                <p>- You have reached the bottom -</p>
            </footer>
        </div>
    );
};

export default Layout;