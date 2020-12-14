import React from 'react'
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
            {props.data.MainFolder.length > 0 ? <DefaultFolderList /> :  <Contentcontainer><h2>データがありません。</h2> </Contentcontainer>}
        </Layout>
    )
}


//Redux
const mapStateToProps =(state) => ({
    data:state.data
})
export default connect(mapStateToProps)(DefaultFolder);
