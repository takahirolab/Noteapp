import { render } from "@testing-library/react";
import { connect } from 'react-redux';
import React, { Component } from 'react'
import { CodeSharp } from "@material-ui/icons";
import { getNote } from '../../redux/actions/AppAction'
import { withRouter } from 'react-router';
import history from '../../util/history/history'
import L_DefaultFolderList from '../../layout/Table/l_DefaultFolderList'
import style from '../DefaultFolder/DefaultFolderList.module.css'
import { Link } from 'react-router-dom';

export class FolderPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const folderid = this.props.noteid
        const Folder = this.props.data.MainFolder
        const test = Folder.map((folder) =>
            folder.id === folderid ?
                folder.Notefolder.map((note) =>
                    <Link to={{ pathname: `/mainfolder/0/${note.id}` }}>
                        <tr className={style.TableName + ' ' + style.TableName__tr}>
                            <p className={style.TableName_p + ' ' + style.TableName__color}>{note.id}</p>
                            <p className={style.TableName_p + ' ' + style.TableName__color}>{note.title}</p>
                            <p className={style.TableName_p + ' ' + style.TableName__color}>{note.description}</p>
                        </tr>
                    </Link>
                ):''
        )

        return (
            <>
                {test.length === 0 ? history.push('/') :
                    <>
                      <L_DefaultFolderList>
                 {test}
                 </L_DefaultFolderList>
                    </>

            }


            </>
        )
    }
}




const mapStateToProps =(state) => ({
    data:state.data
})


export default connect(mapStateToProps)(withRouter(FolderPage));
      {/* <h2>{Getnote[0]['title']}のページ</h2>
                        <p>{Getnote[0]['description']}</p> */}
