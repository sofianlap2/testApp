import "./notification.css"



export const showErrMsg = (msg) => {
    return <div className="error_msg">{msg}</div>
}

export const showSuccessMsg = (msg) => {
    return <div className="succes_msg">{msg}</div>
}