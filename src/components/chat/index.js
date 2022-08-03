import Message from "../message"

function Chat(){
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const time_now = new Date("2022-08-02T12:09:28.330Z").toLocaleDateString(options)
    
    const mess_arr = [
        {
            name: 'N',
            time: '02.08.2022.22.32.00',
            text: 'LOL'
        },
        {
            name: 'N1',
            time: '02.08.2022.22.34.00',
            text: 'LOL'
        },
        {
            name: 'N1',
            time: '02.08.2022.22.35.00',
            text: 'TEXT'
        },
        {   
            name: 'N',
            time: '02.08.2022.22.35.33',
            text: 'TEXT'
        }
    ]


    return(
        <div>
            {
                mess_arr.map(
                    (mess, i) => {
                        return <Message name={mess.name} text={mess.text} time={mess.time} key={mess.time} />
                    }
                )
            }
        </div>
    )
}

export default Chat