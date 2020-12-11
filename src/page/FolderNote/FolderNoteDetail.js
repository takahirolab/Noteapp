import { connect } from 'react-redux';
import React, { Component } from 'react'
import { withRouter } from 'react-router';
import history from '.././../util/history/history'
import style from './NotepageDetail.module.css'

export class NotepageDetail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const Getnote = []
        const noteid =  this.props.noteid
        const Folder = this.props.data.MainFolder
        const test = Folder.map((note) =>

        // フォルダデータの中にノートがあるかどうかを検知
            !note.Notefolder?'':
                note.Notefolder.map((noteitem) =>
                    noteitem.id === noteid ?
                        <>
                            <div className={style.content}>
                                <h1 >{noteitem.title}</h1>
                                <p className={style.content_p}>{noteitem.description}</p>
                            </div>
                        </>
                        : ''
                )
        )
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
