import React from 'react';

import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import NavBar from '../Nav/NavBar/NavBar';

const Layout = props => {
    return (
        <Aux>
            <header className={classes.Header} style={{ diaplay: 'flex', flexBasis: '100%' }}>
                <NavBar />
            </header>
            <main className={classes.Content}>
                {props.children}
            </main>
            <footer className={classes.Footer}>
                <p>- You have reached the bottom -</p>
            </footer>
        </Aux>
    );
};

export default Layout;