import React from 'react'
import FolderPageDetail from './FolderPage/FolderPageDetail'
import { Redirect } from 'react-router-dom'
//Layout
import Layout from '../layout/Layout'
import Contentcontainer from '../layout/ContentContainer/container'
// Redux
import { connect } from 'react-redux';

export function FolderPage(props) {
    // フォルダIDを取得
    const folderid = props.match.params.folder
    const folderData = props.data.MainFolder.find(folder => folder.id === folderid)
    const NoteData = folderData ? folderData.Notefolder : ''

    return (
        <Layout>
            {/* 第二階層で作成したフォルダの有無を検知 */}
            {NoteData.length > 0?
                // ノートが存在する場合　テーブルを表示する
                <FolderPageDetail folderid={folderid} /> :
                // ノートが存在しない場合　データないことを明示
                folderData ? <Contentcontainer><h2>データがありません。</h2> </Contentcontainer> :
                //更新をした場合
                <Redirect to={'/'} />
            }
        </Layout>
    )
}


//Redux
const mapStateToProps =(state) => ({
    data:state.data
})

export default connect(mapStateToProps)(FolderPage);
