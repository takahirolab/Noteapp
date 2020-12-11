import React from 'react'
import Layout from '../layout/Layout'
import DefaultFolderList from './DefaultFolder/DefaultFolderList'
import { connect } from 'react-redux';

export function  DefaultFolder (props) {
    return (
        <Layout>
            {props.data.MainFolder.length > 0?<DefaultFolderList />:<h1>データがありません。</h1>}
        </Layout>
    )
}


const mapStateToProps =(state) => ({
    data:state.data
})


export default connect(mapStateToProps)(DefaultFolder);
