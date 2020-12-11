import React from 'react'
import Style from './content.module.css'

function content (props) {
    return (
        <div className={Style.content}>
            <div className={Style.content_inner}>
                {props.children}
            </div>
        </div>
    )
}
export default content
