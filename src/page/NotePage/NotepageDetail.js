import { render } from "@testing-library/react";
import { connect } from 'react-redux';
import React, { Component } from 'react'
import { CodeSharp } from "@material-ui/icons";
import { getNote } from '../../redux/actions/AppAction'
import { withRouter } from 'react-router';
import history from '.././../util/history/history'

export class NotepageDetail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const Getnote = []
        const noteid =  this.props.noteid
        const Folder = this.props.data.MainFolder
        const test =Folder.map((note) =>
            note.id === noteid ?
                // Getnote.push(note) : ''
                <>
                <h2>{note.id}</h2>
                <h2>{note.title}</h2>
                <h2>{note.description}</h2></>:''
            // note['id'] = noteid ? Getnote.push(note) : ''
        )

        console.log(test)
        return (
            <>
                {test.length === 0 ? history.push('/') :
                    <>
                        {test}
                    </>

            }


            </>
        )
    }
}




const mapStateToProps =(state) => ({
    data:state.data
})


export default connect(mapStateToProps)(withRouter(NotepageDetail));
      {/* <h2>{Getnote[0]['title']}のページ</h2>
                        <p>{Getnote[0]['description']}</p> */}
