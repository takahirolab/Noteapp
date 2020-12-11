import React from 'react'
import Layout from '../layout/Layout'
import FolderPageDetail from './FolderPage/FolderPageDetail'
import { connect } from 'react-redux';
import history from '../util/history/history'

export function FolderPage(props) {
    const noteid = props.match.params.folder

    return (
        <Layout>
 {!props.data.MainFolder ? history.push('/'):
                    <FolderPageDetail noteid={noteid} />}
        </Layout>
    )
}


const mapStateToProps =(state) => ({
    data:state.data
})


export default connect(mapStateToProps)(FolderPage);
