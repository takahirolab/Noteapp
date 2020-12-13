import React from 'react'
import Layout from '../layout/Layout'
import FolderPageDetail from './FolderPage/FolderPageDetail'
import { connect } from 'react-redux';
import Contentcontainer from '../layout/ContentContainer/container'

export function FolderPage(props) {
    const noteid = props.match.params.folder

    return (
        <Layout>

            {props.data.MainFolder.map(item =>
                item.id === noteid ?
                    item.Notefolder.length > 0 ?
                        <FolderPageDetail noteid={noteid} /> :  <Contentcontainer><h2>データがありません。</h2> </Contentcontainer>:''
            )}

        </Layout>
    )
}


const mapStateToProps =(state) => ({
    data:state.data
})


export default connect(mapStateToProps)(FolderPage);
