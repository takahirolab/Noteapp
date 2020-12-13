import React from 'react'
import style from './Contentcontainer.module.css'

function Contentcontainer(props){
    return (
        <div className={style.Contentcontainer}>
            {props.children}
        </div>
    )
}
export default Contentcontainer
