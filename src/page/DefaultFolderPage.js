import React from 'react'
import { Redirect } from 'react-router-dom'
//レイアウト
import Layout from '../layout/Layout'
import Contentcontainer from '../layout/ContentContainer/container'
//Redux
import { connect } from 'react-redux';
//コンポーネント
import DefaultFolderList from './DefaultFolder/DefaultFolderList'


export function  DefaultFolder (props) {
    return (
        <Layout>
            {props.data.MainFolder.length > 0 ?
                // フォルダが存在している場合
                <DefaultFolderList /> :
                 // フォルダが存在してない場合
                <Redirect to={'/'} />}
        </Layout>
    )
}




//Redux
const mapStateToProps =(state) => ({
    data:state.data
})
export default connect(mapStateToProps)(DefaultFolder);
