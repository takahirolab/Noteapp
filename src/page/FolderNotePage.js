import React from 'react'
import Layout from '../layout/Layout'
import { connect } from 'react-redux';
import FolderNoteDetail from './FolderNote/FolderNoteDetail'

export function FolderNote(props) {
    const noteid = props.match.params.noteid
    return (
        <Layout>
                    <FolderNoteDetail noteid={noteid} />
        </Layout>
    )
}


const mapStateToProps =(state) => ({
    data:state.data
})


export default connect(mapStateToProps)(FolderNote);
