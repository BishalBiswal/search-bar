import React from 'react'

const Profile = (props) => {
    const { first_name, last_name, user_name, img } = props;
    return (
        <div className="profile-face">
            <img src={img} alt="" />
            <p>{user_name}</p>
        </div>
    )
}

export default Profile;