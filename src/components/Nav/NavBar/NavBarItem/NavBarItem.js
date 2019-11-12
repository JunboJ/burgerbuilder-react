import React from 'react';
import classes from './NavBarItem.module.css';

const NavBarItem = props => {
    
    return (
        <div className={classes.NavBarItem}>
            <a style={{ color: '#6b2b00'}} className={classes.anchor} href={props.link}>{props.children}</a>
        </div>
    );
}
export default NavBarItem;