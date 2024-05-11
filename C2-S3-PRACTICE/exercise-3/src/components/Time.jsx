function Time() {
    let date = new Date()
    let tg=''
    if(date.getHours()>12){
        tg='PM'
    }
    else{
        tg='AM'
    }
    return(
        <h2>
            {date.getHours()} :{date.getMinutes()}:{date.getMinutes()} {tg}
        </h2>
    );
}

export default Time;