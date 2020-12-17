import React from 'react'

//レイアウト
import Layout from '../layout/Layout'
import Contentcontainer from '../layout/ContentContainer/container'

import AddBtn from '../component/AddButton/AddButton'

function Home (props) {
    return (
        <Layout>
            <Contentcontainer>
                <h1>ようこそ</h1>
            </Contentcontainer>
        </Layout>
    )
}

export default Home
