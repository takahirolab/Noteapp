import React, { Component } from 'react'
import style from './AddButton.module.css'
import AddIcon from '@material-ui/icons/Add';
import FolderIcon from '@material-ui/icons/Folder';
import { Link } from 'react-router-dom';
import DescriptionIcon from '@material-ui/icons/Description';


export class AddButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            FolderCreate:false
        }
        this.OpenSelect = this.OpenSelect.bind(this)
        this.CreateNoteBtn = this.CreateNoteBtn.bind(this)
        this.CreateFolderBtn = this.CreateFolderBtn.bind(this)
    }
    OpenSelect() {
        this.state.FolderCreate ?
            this.setState({ FolderCreate: false })
            :
            this.setState({ FolderCreate: true })
    }

    CreateNoteBtn() {
        this.props.createNote();
        this.OpenSelect();
    }

    CreateFolderBtn() {
        this.props.createFolder();
        this.OpenSelect();
    }


    render() {
        return (
            <div className={style.btn_inner + ' ' + style.btn__top}>
                <Link to='/mainfolder' className={style.btn}>
                    <FolderIcon style={{ color: '#fff', fontSize: 24 }} />
                    <p className={style.btn__color}>メインフォルダ</p>
                </Link>
                <AddIcon style={{ color: '#fff', fontSize: 24 }} onClick={this.OpenSelect} />

                {!this.state.FolderCreate ? '' :
                    <div className={style.popup}>
                        <div onClick={() => {this.CreateNoteBtn();}} className={style.popup_inner}><DescriptionIcon style={{fontSize:22,color:'#151b26'}}className={style.popup_iconPadding}/><p >ノートを作成</p></div>
                        <div onClick={() => {this.CreateFolderBtn(); }} className={style.popup_inner}><FolderIcon style={{fontSize:22,color:'#151b26'}}className={style.popup_iconPadding}/><p >フォルダを作成</p></div>
                  </div>}

            </div>
        )
    }
}

export default AddButton
