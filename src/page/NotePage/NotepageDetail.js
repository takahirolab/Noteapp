
import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import history from '.././../util/history/history'
import ContentContainer from '../../layout/ContentContainer/container'
import style from './NotepageDetail.module.css'
import { NoteDataUpdate } from '../../redux/actions/AppAction';
import { Link } from 'react-router-dom';

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
            file:this.props.NoteData.file
        };
        console.log(NoteSubmitData)
        this.props.NoteDataUpdate(NoteSubmitData);
        this.props.ContentEditAction();
        alert('データが更新されました');
        event.preventDefault();
        }


    render() {
        const Edit = this.props.Edit
        const NoteData =  this.props.NoteData
        const Notestyle =
            !NoteData? '':
            <><h1>{NoteData.title}</h1><p className={style.content_p}>{NoteData.description}</p></>

        return (
            <>
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
                    :!NoteData? history.push('/') : Notestyle}
            </ContentContainer>
            </>
        )
    }
}




const mapStateToProps =(state) => ({
    data:state.data
})


export default connect(mapStateToProps,{NoteDataUpdate})(withRouter(NotepageDetail));

