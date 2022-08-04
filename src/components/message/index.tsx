import React, {FC} from 'react'
import { dateNow } from '../../utils/dateOption'
import style from './style.module.css'

interface props {
    name: string, 
    text: string, 
    time: string
}

function Message({name, text, time}:props): ReturnType<FC>{
    console.log(dateNow)
    return(
        <div className={style.message}>
            
            <div className={style.message__contents}>
                <p className={style.message__nameuser}>{name}</p>
                <p className={style.message__time}>{time}</p>
            </div>

            <div className={style.message__contents}>
                <span> {text} </span>
            </div>
              
        </div>
    )
}

export default Message