import React, { Component } from 'react'
import style from './AddNoteToFolder.module.css'
import AddIcon from '@material-ui/icons/Add';
import FolderIcon from '@material-ui/icons/Folder';

export class AddNoteToFolder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            FolderCreate:false
        }
        this.OpenSelect = this.OpenSelect.bind(this)
        this.CreateNoteBtn = this.CreateNoteBtn.bind(this)
    }
    OpenSelect() {
        this.state.FolderCreate?this.setState({ FolderCreate: false }):this.setState({ FolderCreate: true })
    }

    CreateNoteBtn() {
        console.log(this.props.FolderNo)
        this.props.AddNoteToFolder(this.props.FolderNo);
        this.OpenSelect();
    }


    render() {
        return (
           <>
                <AddIcon style={{ color: '#fff', fontSize: 24 }} onClick={this.OpenSelect} />

                {!this.state.FolderCreate ? '' :
                      <div className={style.popup}>
                      <h2 onClick={() => {this.CreateNoteBtn();}}>ノートを作成</h2>
                  </div>}

        </>
        )
    }
}

export default AddNoteToFolder
