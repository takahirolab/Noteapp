import React from 'react'
import Layout from '../layout/Layout'
import DefaultFolderList from './DefaultFolder/DefaultFolderList'
import { connect } from 'react-redux';
import history from '../util/history/history'
import { withRouter } from 'react-router';

export function  DefaultFolder (props) {
    return (
        <Layout>
             <DefaultFolderList />
        </Layout>
    )
}


const mapStateToProps =(state) => ({
    data:state.data
})


export default connect(mapStateToProps)(DefaultFolder);
