import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import history from '.././../util/history/history'
//スタイル
import style from './DefaultFolderList.module.css'
//レイアウト
import L_DefaultFolderList from '../../layout/Table/l_DefaultFolderList'
//redux
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

export class DefaultFolderList extends Component {
    constructor(props) {
    super(props)
}
    render() {
         //登録されているフォルダー/ノート全件取得
        const Folders = this.props.data.MainFolder
         //登録されているフォルダー/ノートの行列作成

        const NoteItemList = !Folders?'':Folders.map(folder =>
            <>
                <Link to={folder.file?{ pathname:`/mainfolder/${folder.id}` }:{ pathname:`/mainfolder/0/${folder.id}` }}>
                <tr className={style.TableName + ' ' + style.TableName__tr}>
                    <p　className={style.TableName_p+ ' '+style.TableName__color}>{folder.id}</p>
                    <p　className={style.TableName_p+ ' '+style.TableName__color}>{folder.title}</p>
                    <p　className={style.TableName_p+ ' '+style.TableName__color}>{folder.description}</p>
                </tr>
                </Link>
            </>
        )

        return (

            <> {/* ノートがない場合はホームへ &&更新をかけた場合*/}
                {NoteItemList.length === 0 ?  <Redirect to={'/'} />:
               //* テーブルリストの表示
                <L_DefaultFolderList>
                    {NoteItemList}
                </L_DefaultFolderList>
            }
            </>
        )
}
}


//Redux
const mapStateToProps =(state) => ({
    data:state.data
})
export default connect(mapStateToProps)(withRouter(DefaultFolderList));
