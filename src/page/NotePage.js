import React, { Component } from 'react'
import history from '../util/history/history'
import { Redirect } from 'react-router-dom'
//レイアウト
import Layout from '../layout/Layout'
//コンポーネント
import NotepageDetail from './NotePage/NotepageDetail'
import ContentEdit from '../component/ContentEdit/ContentEdit'
//Redux
import { connect } from 'react-redux';

export class NotePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Edit:false
        }
    }


    // 編集画面の開閉
    ContentEditAction() {
        this.state.Edit ?this.setState({ Edit: false }):this.setState({ Edit: true })
    }

    render() {
        //ノートIDを取得
        const noteid = this.props.match.params.noteid
        //登録されているフォルダー/ノート全件取得
        const Folder = this.props.data.MainFolder
        //対象となるノートデータを取得
        const NoteData = Folder.find((note) => note.id === noteid )

        return (
            <>
                <Layout>
                    {!NoteData ? <Redirect to={'/'} /> :
                    <>
                        {/* ノートの表示　データ表示画面　AND 編集画面 */}
                        <NotepageDetail NoteData={NoteData} Edit={this.state.Edit} ContentEditAction={() => { this.ContentEditAction(); }} />
                        {/* 編集ボタンの表示切り替え */}
                        {this.state.Edit ? '' : <ContentEdit ContentEditAction={() => { this.ContentEditAction(); }} />}
                    </>
                }
                </Layout>

            </>
        )
    }
}


//Redux
const mapStateToProps =(state) => ({
    data:state.data
})

export default connect(mapStateToProps)(NotePage);
