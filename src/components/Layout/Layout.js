import React from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import NavBar from '../Nav/NavBar/NavBar';
import SideBar from '../Nav/SideBar/SideBar';

const Layout = props => {
    return (
        <div className={classes.main}>
            <header className={classes.Header} style={{ diaplay: 'flex', flexBasis: '100%' }}>
                <SideBar />
                <NavBar />
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