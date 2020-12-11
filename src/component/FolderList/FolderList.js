
import React, { Component } from 'react'
import AddButton from '../AddButton/AddButton'
import FolderIcon from '@material-ui/icons/Folder';
import style from './FolderList.module.css'
import { AddFolderOne } from '../../redux/actions/AppAction'
import { UpdateFolder } from '../../redux/actions/AppAction'
import { connect } from 'react-redux';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import DescriptionIcon from '@material-ui/icons/Description';
import AddNoteToFolder from '../AddNoteToFolder/AddNoteToFolder'
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import {CreateId } from '../../util/CreateId'

const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const N = 16
export class FolderList extends Component {
    constructor() {
        super()
        this.state = {
            folderId: Array.from(crypto.getRandomValues(new Uint8Array(N))).map((n) => S[n % S.length]).join(''),
            addNoteFolder: 'close',
            AddFolderNo: '',
            CreateSelect:false
        }

    }

    // 第二階層ノート作成
    createNote() {
        const value = CreateId();
        const CreateNote= []
        CreateNote.push({ id:value,title: 'ノート',description:'サンプルテキストです。よろしくお願いします。',file:true})
        this.props.AddFolderOne(CreateNote);
    }

    // 第二階層フォルダ作成
    createFolder() {
        const value = CreateId();
        const Createfolder= []
        Createfolder.push({ id:value,title: 'フォルダー',file:false,Notefolder:[]})
        this.props.AddFolderOne(Createfolder);
    }


        // 第三階層ノート作成
    AddNoteToFolder() {
        const value = CreateId();
        const addNoteFolder = []
            this.props.data.MainFolder.map(MainFolder =>
                MainFolder.id === this.state.AddFolderNo ? addNoteFolder.push(MainFolder) : '')
                addNoteFolder[0].Notefolder.push({ id:value, title: 'ノート',description:'サンプルテキストです。よろしくお願いします。', file: true})
        console.log(addNoteFolder)
        this.props.UpdateFolder(addNoteFolder);
        this.setState({ CreateSelect:false})
    }

    // 第三階層のNoteのPOP開閉
    OpenSelect() {
        this.state.CreateSelect?this.setState({ CreateSelect: false }):this.setState({ CreateSelect: true })
    }

    render() {
        const MainFolders = this.props.data.MainFolder
        const folders = []
        const notes = []
        MainFolders.map(folderItem => folderItem.file ? notes.push(folderItem) : folders.push(folderItem))

        // 第二階層でフォルダを作成する場合
        const folderList = folders.map(folder =>
            <>
                <Link to={{ pathname: `/mainfolder/0/${folder.id}` }} className={style.folder}>
                    <div className={style.folderList}>
                        <FolderIcon style={{ color: '#fff', fontSize: 24 }} />
                        <p className={style.folderList_h2}>{folder.title}</p>
                    </div>
                    <AddIcon style={{ color: '#fff', fontSize: 24 }} onClick={() => { this.state.CreateSelect ? this.setState({ CreateSelect: false }) : this.setState({ CreateSelect: true, AddFolderNo: folder.id }) }} />

                    {/* 第三階層POPアップの開閉 */}
                    {/* クリックしたフォルダのみ開閉 */}
                    {this.state.CreateSelect & folder.id === this.state.AddFolderNo ?
                        <div className={style.popup}>
                            <div onClick={() => { this.AddNoteToFolder(); }}className={style.popup_inner}><DescriptionIcon style={{fontSize:22,color:'#151b26'}}className={style.popup_iconPadding}/><p >ノートを作成</p></div>
                        </div> : ''}
                </Link>

                {/* // もしノートがある場合 */}
                {folder.Notefolder ?
                    folder.Notefolder.map((noteitem) =>
                        <Link to={{ pathname: `/mainfolder/folder?${folder.title}/${noteitem.id}` }}  className={style.folderList + ' ' + style.Note} key={noteitem.id}>
                            <DescriptionIcon style={{ color: '#fff', fontSize: 24 }} />
                            <p className={style.folderList_h2}>{noteitem.title}</p>
                        </Link>
                    )
                    : ''
                }

            </>
        )

        // 第二階層でノートを作成する場合
        const noteList = notes.map((note) =>
            <Link to={{ pathname: `/mainfolder/${note.id}` }} className={style.folder} key={note.id}>
                <div className={style.folderList}>
                    <DescriptionIcon style={{ color: '#fff', fontSize: 24 }} />
                    <p className={style.folderList_h2}>{note.title}</p>
                </div>
            </Link>)


        return (
            <>
                {/* フォルダ・ノートの追加 */}
                <AddButton
                    createNote={() => { this.createNote(); }}
                    createFolder={() => { this.createFolder(); }} />
                <div className={style.folderList_inner}>
                    {folderList}
                    {noteList}
                </div>
            </>
        )
    }
}


const mapStateToProps =(state) => ({
    data:state.data
  })

  export default connect(mapStateToProps,{AddFolderOne,UpdateFolder})(FolderList);
