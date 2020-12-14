import React, { Component } from 'react'
import { withRouter } from 'react-router';
//レイアウト
import Layout from '../layout/Layout'
//コンポーネント
import FolderNoteDetail from './FolderNote/FolderNoteDetail'
import ContentEdit from '../component/ContentEdit/ContentEdit'
//Redux
import { connect } from 'react-redux'



export class FolderNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Edit: false
        }
    }

    // 編集画面の開閉
    ContentEditAction() {
        this.state.Edit ? this.setState({ Edit: false }) : this.setState({ Edit: true })
    }


    render() {
        //フォルダ内の現在指定しているノートIDを取得
        const noteid = this.props.match.params.noteid
         //フォルダIDを取得
        const folderId = this.props.match.params.folder
         //登録されているフォルダー/ノート全権取得
        const Folder = this.props.data.MainFolder
        //対象となるノートデータを取得
        const NoteData = []
        const NoteDataA = []
        Folder.map((folder) => folder.id === folderId ? NoteData.push(folder) : '')
        const test = !NoteData[0]?'':NoteData[0].Notefolder.map((note) => note.id === noteid ? NoteDataA.push(note) : '')


        return (
            <Layout>
                {/* ノートの表示　データ表示画面　AND 編集画面 */}
                <FolderNoteDetail NoteData={NoteDataA[0]} noteid={noteid} folderid={folderId} Edit={this.state.Edit} ContentEditAction={() => { this.ContentEditAction(); }} />
                 {/* 編集ボタンの表示切り替え */}
                {this.state.Edit ? '' : <ContentEdit ContentEditAction={() => { this.ContentEditAction(); }} />}
            </Layout>
        )
    }
}

//Redux
const mapStateToProps =(state) => ({
    data:state.data
})


export default connect(mapStateToProps)(withRouter(FolderNote));
