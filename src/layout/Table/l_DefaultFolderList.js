import React from 'react'
import style from '../../page/DefaultFolder/DefaultFolderList.module.css'

export function L_DefaultFolderList (props) {
    return (
        <table className={style.Table}>
        <tr className={style.TableName}>
            <th className={style.TableName_p}>Id</th>
            <th className={style.TableName_p}>タイトル</th>
            <th className={style.TableName_p}>内容</th>
        </tr>
        {props.children}
        </table>
    )
}

export default L_DefaultFolderList
