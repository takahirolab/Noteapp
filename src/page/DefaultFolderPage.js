import React from 'react'
import Layout from '../layout/Layout'
import DefaultFolderList from './DefaultFolder/DefaultFolderList'
import { connect } from 'react-redux';
import Contentcontainer from '../layout/ContentContainer/container'

export function  DefaultFolder (props) {
    return (
        <Layout>
            {props.data.MainFolder.length > 0 ? <DefaultFolderList /> :  <Contentcontainer><h2>データがありません。</h2> </Contentcontainer>}
        </Layout>
    )
}


const mapStateToProps =(state) => ({
    data:state.data
})


export default connect(mapStateToProps)(DefaultFolder);
