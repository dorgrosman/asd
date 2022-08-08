import { FaSignInAlt, FaSignOutAlt, FaUser, FaUserFriends } from 'react-icons/fa'
import { AiFillHome } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../service/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    const onFriendsList = () => {
        // dispatch(logout())
        navigate('/friends-list')
    }

    return (
        <header className='header'>
            <div className='logo '>
                <Link to='/'><AiFillHome/></Link>
            </div>
            <ul>
                {user ? (
                    <li className='flex'>
                        <button className='btn' onClick={onFriendsList}><FaUserFriends />My Friends </button>
                        <button className='btn' onClick={onLogout}><FaSignOutAlt />Logout</button>
                    </li>) : (
                    <>
                        <li>
                            <Link to='/login'><FaSignInAlt />Login</Link>
                        </li>
                        <li>
                            <Link to='/register'><FaUser />Register</Link>
                        </li>
                    </>)
                }
            </ul >
        </header >
    )
}

export default Header