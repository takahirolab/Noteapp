import React from 'react'
import style from './container.module.css'

function container(props){
    return (
        <div className={style.container}>
            {props.children}
        </div>
    )
}
export default container
