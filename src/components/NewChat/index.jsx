import React, { useState } from 'react'
import './NewChat.css'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export const NewChat = ({user, chalist, show, setShow}) => {

    const [list, setList] = useState([
        {id: 123, avatar: 'https://fiskvilamedeiros.com.br/wp-content/uploads/2015/04/avatar-1577909_960_720.png', name: 'Fabricio'},
        {id: 123, avatar: 'https://fiskvilamedeiros.com.br/wp-content/uploads/2015/04/avatar-1577909_960_720.png', name: 'Fabricio'},
        {id: 123, avatar: 'https://fiskvilamedeiros.com.br/wp-content/uploads/2015/04/avatar-1577909_960_720.png', name: 'Fabricio'},
        {id: 123, avatar: 'https://fiskvilamedeiros.com.br/wp-content/uploads/2015/04/avatar-1577909_960_720.png', name: 'Fabricio'},
    ])

    const handleClose = () => {
        setShow(false)
    }

    return (
        <div className='newChat' style={{left: show?0:-415}}>
            <div className='newChat-head'>
                <div className='newChat-backbutton'onClick={handleClose}>
                    <ArrowBackIcon style={{color: '#FFF'}}/>
                </div>
                <div className='newChat-headtitle'>
                    Nova Conversaaa
                </div>
            </div>
            <div className='newChat-list'>
                {list.map((item, key)=>(
                    <div className='newChat-item' key={key}>
                        <img className='newChat-itemavatar' src={item.avatar} />
                        <div className='newChat-itemname'>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}