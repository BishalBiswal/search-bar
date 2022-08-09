import React from 'react'

const Chatprofiles = (props) => {
    const { user_name, img } = props;
    return (
        <div className="chat-profile">
            <img src={img} alt="" />
            <article>
                <span><h3 id="chat-name">{user_name}</h3> <h6>3:32pm</h6></span>
                <p>hi</p>
            </article>
        </div>
    )
}

export default Chatprofiles
