import React from 'react'

import style from './User.module.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



export const User = () => {
    return (
        <div className={style.user}>
            <div className={style.user}>
                        <AccountCircleIcon style={{ fontSize: 40, color: '#fff' }} />
                        <p className={style.user_p}>山田太郎&ensp;さん</p>
        </div>
         <ExpandMoreIcon style={{ fontSize: 24,paddingLeft:'',color:'#fff' }} />
         </div>
    )
}

export default User
