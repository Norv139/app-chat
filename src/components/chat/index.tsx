import React, { FC } from 'react'
import Message from "../message"
import style from './style.module.css'

function Chat():ReturnType<FC>{
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    const mess_arr = [
        {
            name: 'N',
            time: '02.08.2022, 11:32:58',
            text: 'LOL'
        },
        {
            name: 'N1',
            time: '02.08.2022, 22:32:58',
            text: 'LOL'
        },
        {
            name: 'N1',
            time: '03.08.2022, 11:32:58',
            text: 'TEXT'
        },
        {   
            name: 'N',
            time: '04.08.2022, 15:32:58',
            text: 'TEXT'
        }
    ]
    return(
        <div>
            {
                mess_arr.map(
                    (mess) => {
                        return <Message name={mess.name} text={mess.text} time={mess.time} key={mess.time} />
                    }
                )
            }
            <div className={style.message__contents}>
                <input className={style.message__input}>
                    
                </input>
                <button className={style.message__button}>+</button>
            </div>
        </div>
    )
}

export default Chat