import React from 'react'
import FolderPageDetail from './FolderPage/FolderPageDetail'
//Layout
import Layout from '../layout/Layout'
import Contentcontainer from '../layout/ContentContainer/container'
// Redux
import { connect } from 'react-redux';

export function FolderPage(props) {
    // フォルダIDを取得
    const folderid = props.match.params.folder

    return (
        <Layout>
            {/* 第二階層で作成したノートの有無を検知 */}
            {props.data.MainFolder.map(folder => folder.id === folderid ? folder.Notefolder.length > 0 ?
                // ノートが存在する場合　テーブルを表示する
                <FolderPageDetail folderid={folderid} /> :
                // ノートが存在しない場合　データないことを明示
                <Contentcontainer><h2>データがありません。</h2> </Contentcontainer> : ''
            )}

        </Layout>
    )
}


//Redux
const mapStateToProps =(state) => ({
    data:state.data
})

export default connect(mapStateToProps)(FolderPage);
