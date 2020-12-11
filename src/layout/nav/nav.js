
import React from 'react'
import style from './nav.module.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const Nav = () => {
    return (
    <>
    <nav className={style.nav}>
        <div className={style.nav_inner}>

            <div className={style.nav_profile}>
                        <AccountCircleIcon style={{ fontSize: 40, color: '#7D868C' }} />
                        <p className={style.nav_p}>山田太郎</p>
                        <ExpandMoreIcon style={{ fontSize: 24,marginLeft:'2rem' }} />
            </div>
        </div>
    </nav>
    </>
    )
}

export default Nav
