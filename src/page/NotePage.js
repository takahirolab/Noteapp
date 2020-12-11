import React from 'react'
import Layout from '../layout/Layout'
import NotepageDetail from './NotePage/NotepageDetail'
import { connect } from 'react-redux';
import history from '../util/history/history'

export function NotePage(props) {
    const noteid = props.match.params.noteid
    return (
        <>

            <Layout>
                <NotepageDetail noteid={noteid} />
            </Layout>

 </>
    )
}

const mapStateToProps =(state) => ({
    data:state.data
})


export default connect(mapStateToProps)(NotePage);
