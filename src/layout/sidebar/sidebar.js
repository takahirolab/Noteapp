import React from 'react'
import Style from './sidebar.module.css'
import User from '../../component/User/User'
import AddButton from '../../component/AddButton/AddButton'
import FolderList from '../../component/FolderList/FolderList'
import { ReactComponent as Logo } from '../../image/Logo.svg';
import { Link } from 'react-router-dom';

function sidebar(props){
    return (
        <div className={Style.sidebar}>
            <Link to="/"><Logo/></Link>
            <FolderList />
        </div>
    )
}

export default sidebar
