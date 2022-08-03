import style from './style.module.css'

function Message({name, text, time}){
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