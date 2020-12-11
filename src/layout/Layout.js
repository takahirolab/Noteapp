import React from 'react'
import Container from './container/container'
import Sidebar from './sidebar/sidebar'
import Contents from './content/content'
import Footer from './footer/footer'

function Layout(props){
    return (
        <>
        <Container>
        <Sidebar />
        <Contents>
              {props.children}
         </Contents>
       </Container>
        <Footer />
    </>
    )
}

export default Layout
