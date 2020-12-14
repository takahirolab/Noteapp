import React, { Component } from 'react'
import style from './ContentEdit.module.css'
import { withRouter } from 'react-router';

export class ContentEdit extends Component {
    constructor(props) {
        super(props)
        this.ContentEditActionA = this.ContentEditActionA.bind(this)
    }

    ContentEditActionA() {
        this.props.ContentEditAction();
    }

    render() {

        return (
            <h2 className={style.btn} onClick={() => {this.ContentEditActionA(); }} >編集する</h2>
        )
    }
}


export default (withRouter (ContentEdit))
