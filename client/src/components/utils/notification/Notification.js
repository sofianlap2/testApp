import "./notification.css"

export const showErrMsg = (msg) => {
    return <div className="error_msg">{msg}</div>
}

export const showSuccessMsg = (msg) => {
    return <div className="success_msg">{msg}</div>
}