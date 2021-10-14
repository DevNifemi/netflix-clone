import './profile-users.styles.css'
import userImageOne from '../../images/user-one.png'
import userImageTwo from '../../images/userTwo.png'
import userImageThree from '../../images/userThree.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { userAction } from '../../redux/action/user-action'
import store from '../../redux/store'

const ProfileUsers = () => {
    const [userDetails] = useState([
        {
            username: 'Imran',
            userImage: userImageOne
        },
        {
            username: 'Fuad',
            userImage: userImageTwo
        },
        {
            username: 'Kolapo',
            userImage: userImageThree
        }

    ])

    return (
        <div className='users_container'>
            <h1>Who's Watching?</h1>

            <div className="user-details">
                {
                userDetails.filter((userInfo, idx) => idx < 3)
                .map((userInfo, idx) => (
                    <Link to='/home' key={idx} onClick={handleUserClick.bind(null, userInfo.userImage)} className='contain'>
                    <img className='user-profile' src={ userInfo.userImage} alt="" />
                    <h5>{userInfo.username}</h5>
                    </Link>
                ))
                }
            </div>
        </div>
    )
}

function handleUserClick( user_id ) {
    store.dispatch(userAction(user_id));
}

export default ProfileUsers
