import { connect } from 'react-redux';
import React, { Component } from 'react'
import style from './DefaultFolderList.module.css'
import { Link } from 'react-router-dom';
import L_DefaultFolderList from '../../layout/Table/l_DefaultFolderList'
import { withRouter } from 'react-router';
import history from '.././../util/history/history'

export class DefaultFolderList extends Component {
    constructor(props) {
    super(props)
}
    render() {
        const Folders = this.props.data.MainFolder
        const NoteItemList = !Folders?'':Folders.map(folder =>
            <>
                <Link to={folder.file?{ pathname:`/mainfolder/${folder.id}` }:{ pathname:`/mainfolder/${folder.id}` }}>
                <tr className={style.TableName + ' ' + style.TableName__tr}>
                    <p　className={style.TableName_p+ ' '+style.TableName__color}>{folder.id}</p>
                    <p　className={style.TableName_p+ ' '+style.TableName__color}>{folder.title}</p>
                    <p　className={style.TableName_p+ ' '+style.TableName__color}>{folder.description}</p>
                </tr>
                </Link>
            </>
                )
        return (
            <>   {NoteItemList.length === 0 ? history.push('/') :
                <L_DefaultFolderList>
                    {NoteItemList}
                </L_DefaultFolderList>
            }
            </>
        )
}
}


const mapStateToProps =(state) => ({
    data:state.data
})


export default connect(mapStateToProps)(withRouter(DefaultFolderList));
