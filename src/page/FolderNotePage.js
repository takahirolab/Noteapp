import React, { Component } from 'react'
import Layout from '../layout/Layout'
import { connect } from 'react-redux';
import FolderNoteDetail from './FolderNote/FolderNoteDetail'
import ContentEdit from '../component/ContentEdit/ContentEdit'

export class FolderNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Edit: false
        }
    }

    ContentEditAction() {
        this.state.Edit ? this.setState({ Edit: false }) : this.setState({ Edit: true })
    }

    render() {
        const noteid = this.props.match.params.noteid
        const Folder = this.props.data.MainFolder
        const NoteData = []
        const FolderId = []
        Folder.map((note) => !note.Notefolder?'':note.Notefolder[0].id === noteid ? NoteData.push(note.Notefolder[0]) : '')
        Folder.map((note) => !note.Notefolder?'':FolderId.push(note.Notefolder[0]) )
        console.log(FolderId)
        console.log(NoteData )

        return (
            <Layout>
                <FolderNoteDetail NoteData={NoteData[0]} Edit={this.state.Edit} ContentEditAction={() => { this.ContentEditAction(); }}/>
                {this.state.Edit ? '' : <ContentEdit ContentEditAction={() => { this.ContentEditAction(); }} />}
            </Layout>
        )
    }
}

const mapStateToProps =(state) => ({
    data:state.data
})


export default connect(mapStateToProps)(FolderNote);
