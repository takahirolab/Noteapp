import { connect } from 'react-redux';
import React, { Component } from 'react'
import { withRouter } from 'react-router';
import history from '.././../util/history/history'
import style from './NotepageDetail.module.css'
import ContentContainer from '../../layout/ContentContainer/container'
import { FolderNoteDataUpdate } from '../../redux/actions/AppAction';

export class NotepageDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.NoteData ? this.props.NoteData.title : '',
            description: this.props.NoteData ? this.props.NoteData.description : '',
            id: this.props.NoteData ? this.props.NoteData.id : '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    CancelInput() {
        this.setState({
            title: this.props.NoteData ? this.props.NoteData.title : '',
            description: this.props.NoteData ? this.props.NoteData.description : '',
            id: this.props.NoteData ? this.props.NoteData.id : '',
        })
        this.props.ContentEditAction();
    }

    handleSubmit(event) {
        const NoteSubmitData = {
            id: this.props.NoteData.id,
            title: this.state.title,
            description: this.state.description,
            file: this.props.NoteData.file,
            FolderId:this.props.match.params.noteid
        };
        console.log(NoteSubmitData)
        this.props.FolderNoteDataUpdate(NoteSubmitData);
        this.props.ContentEditAction();
        alert('データが更新されました');
        event.preventDefault();
        }


    render() {
        const Edit = this.props.Edit
        const NoteData = this.props.NoteData
        const Note =  !NoteData? '':
                        <>
                                <h1 >{NoteData.title}</h1>
                                <p className={style.content_p}>{NoteData.description}</p>
                        </>

console.log(NoteData)

        return (
            <ContentContainer>
                {Edit ?
                    <>
                    <input type="text" className={style.inputTitle} name="title" label="title" wrap="soft"onChange={this.handleChange} value={this.state.title} />
                    <textarea   wrap="soft"　className={style.description} name="description" label="description" onChange={this.handleChange} value={this.state.description} />

                <div className={style.editbtton}>
                    <button className={style.Btn} onClick={() => { this.CancelInput() }}>キャンセル</button>
                    <button className={style.Btn}onClick={this.handleSubmit} style={{ background: '#52BF90', color: '#fff', width: 200 }}>編集を保存する</button>
                 </div>
                </>
            :!NoteData? history.push('/') : Note}


            </ContentContainer>
        )
    }
}




const mapStateToProps =(state) => ({
    data:state.data
})


export default connect(mapStateToProps,{FolderNoteDataUpdate})(withRouter(NotepageDetail));
      {/* <h2>{Getnote[0]['title']}のページ</h2>
                        <p>{Getnote[0]['description']}</p> */}
