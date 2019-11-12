import React from 'react';
import classes from './NavBarItem.module.css';

const NavBarItem = props => {
    
    return (
        <div className={classes.NavBarItem}>
            <a href={props.link}>{props.children}</a>
        </div>
    );
}
export default NavBarItem;