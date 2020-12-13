import React, { Component } from 'react'
import Layout from '../layout/Layout'
import NotepageDetail from './NotePage/NotepageDetail'
import { connect } from 'react-redux';
import ContentEdit from '../component/ContentEdit/ContentEdit'

export class NotePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Edit:false
        }
    }

    ContentEditAction() {
        this.state.Edit ?this.setState({ Edit: false }):this.setState({ Edit: true })
    }


    render() {
        const noteid = this.props.match.params.noteid
        const Folder = this.props.data.MainFolder
        const NoteData = []
        Folder.map((note) =>note.id === noteid ?NoteData.push(note) : '')
        return (
            <>
                <Layout>
                    <NotepageDetail NoteData={NoteData[0]} Edit={this.state.Edit} ContentEditAction={() => { this.ContentEditAction(); }} />
                    {this.state.Edit ? '' : <ContentEdit ContentEditAction={() => { this.ContentEditAction(); }} />}
                </Layout>

            </>
        )
    }
}

const mapStateToProps =(state) => ({
    data:state.data
})


export default connect(mapStateToProps)(NotePage);
