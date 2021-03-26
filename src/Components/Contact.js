import React from 'react';

const Contact = (props) => {
    const { name, status, avatar, setStatus } = props
    return (
        <div className="Contact" onClick={() => setStatus(status === "Online" ? "Offline" : "Online")}>
            <img className="avatar" src={avatar} alt="avatar" />
            <div>
                <div className="name">
                    {name}
                </div>
                <div className="status">
                    <span className={status === "Online" ? "status-online" : "status-offline"}></span>
                    <p className="status-text">
                        {status}
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Contact