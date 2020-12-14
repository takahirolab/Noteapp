import React, { Component } from 'react'
import { withRouter } from 'react-router';
import history from '.././../util/history/history'
// スタイル
// import style from './NotepageDetail.module.css'
import style from '../NotePage/NotepageDetail.module.css'
//レイアウト
import ContentContainer from '../../layout/ContentContainer/container'
//Redux
import { connect } from 'react-redux';
import { UpdateNoteInFolder } from '../../redux/actions/AppAction';

//マークダウン
import marked from "marked";
//コンポーネント
import Markdown from '../../util/Markdown'


export class NotepageDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.NoteData ? this.props.NoteData.title : '',
            description: this.props.NoteData ? this.props.NoteData.description : '',
            id: this.props.NoteData ? this.props.NoteData.id : '',
            markdown:this.props.NoteData ? this.props.NoteData.description : '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

     // 入力欄への文字入力/stateの更新
    handleChange = (event) =>{
        this.setState({ [event.target.name]: event.target.value })
    }

      // 入力欄への文字入力/stateの更新  マークダウン
      MarkdownChange(value) {
        console.log(value)
        this.setState({ markdown:value })
        }

    //キャンセルボタンを押下
    CancelInput() {
        this.setState({
            title: this.props.NoteData ? this.props.NoteData.title : '',
            description: this.props.NoteData ? this.props.NoteData.description : '',
            id: this.props.NoteData ? this.props.NoteData.id : '',
            markdown:this.props.NoteData ? this.props.NoteData.description : '',
        })
         //編集画面を終了・ノートデータの表示ページへ
        this.props.ContentEditAction();
    }


    handleSubmit(event) {
        const NoteSubmitData = {
            id: this.props.NoteData.id,
            title: this.state.title,
            description: this.state.markdown,
            file:this.props.NoteData.file,
            FolderId:this.props.folderid
        };
        //Reduxへ更新
        this.props.UpdateNoteInFolder(NoteSubmitData);
        //編集画面を終了・ノートデータの表示ページへ
        this.props.ContentEditAction();
        alert('データが更新されました');
        event.preventDefault();
        }

    render() {
        const Edit = this.props.Edit
        // フォルダデータ取得(ノート全てあり)
        const NoteData = this.props.NoteData
        const Note = !NoteData?'':
        // フォルダデータの中にノートがあるかどうかを検知
                        <><h1 >{NoteData.title}</h1><span className={style.content_p} dangerouslySetInnerHTML={{ __html: marked(NoteData.description)}}/></>


        return (
            <ContentContainer>
                {Edit ?
                        <>
                            <input type="text" className={style.inputTitle} name="title" label="title" wrap="soft" onChange={this.handleChange} value={this.state.title} />
                            {/* <textarea   wrap="soft"　className={style.description} name="description" label="description" onChange={this.handleChange} value={this.state.description} /> */}
                            <Markdown MarkdownChange={(value) => { this.MarkdownChange(value); }} description={this.props.NoteData ? this.props.NoteData.description : ''}/>
                        {/* 編集時、ボタン表示 */}
                        <div className={style.editbtton}>
                            <button className={style.Btn} onClick={() => { this.CancelInput() }}>キャンセル</button>
                            <button className={style.Btn}onClick={this.handleSubmit} style={{ background: '#52BF90', color: '#fff', width: 200 }}>編集を保存する</button>
                         </div>
                        </>
                    :
                    //* データ表示画面(データがない場合はホームへ)、ある場合はノートデータを表示
                    !NoteData ? history.push('/') :Note}

            </ContentContainer>
        )
    }
}



//Redux
const mapStateToProps =(state) => ({
    data:state.data
})
export default connect(mapStateToProps,{UpdateNoteInFolder})(withRouter(NotepageDetail));
