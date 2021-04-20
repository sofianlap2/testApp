import React from 'react';
import { useSelector} from "react-redux"

import "./alert.css"

const Alert = () => {
const alerts = useSelector((state)=> state.alertReducer)
    return (
        <div>
            {alerts !== null && alerts.length > 0 && alerts.map((alert)=> (
                <div className="danger" key={alert.id}> 
                    {alert.msg}
                </div>
            ))}
        </div>
    )
}

export default Alert
