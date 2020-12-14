import React, { Component } from 'react'
import { withRouter } from 'react-router';
import history from '../../util/history/history'
import { Link } from 'react-router-dom';

//Style
import style from '../DefaultFolder/DefaultFolderList.module.css'
//Layout
import L_DefaultFolderList from '../../layout/Table/l_DefaultFolderList'

// Redux
import { connect } from 'react-redux';

export class FolderPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // 第二階層のフォルダIdの取得
        const folderid = this.props.folderid
         // 登録されているフォルダ全取得
        const Folder = this.props.data.MainFolder

        // 第二階層で作成されたフォルダID 内で作成されたノートの配列作成
        const Notes = Folder.map((folder) =>
            folder.id === folderid ?
                folder.Notefolder.map((note) =>
                    <Link to={{ pathname: `/mainfolder/folder?${folder.id}/${note.id}` }}>
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
                {/* ノートがない場合はホームへ &&更新をかけた場合*/}
                {Notes.length === 0 ? history.push('/') :
                    <>
                      <L_DefaultFolderList>
                         {Notes}
                     </L_DefaultFolderList>
                    </>

            }


            </>
        )
    }
}



// Reduxとの連携
const mapStateToProps =(state) => ({
    data:state.data
})

export default connect(mapStateToProps)(withRouter(FolderPage));

