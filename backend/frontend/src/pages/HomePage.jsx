import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../service/authSlice';

function Dashboard() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.auth.users)

  useEffect(() => {

    dispatch(getUsers())

  }, [dispatch])

  return (
    <div>
      {users ? (
        <div className='users'>
          <h1>Home Page - Users List</h1>
          <ul>
            {users.map((user) => (
              < li key={user._id} >
                <div className='user '>
                  <h2>{user.name}</h2>
                  <h3>{user.email}</h3>
                </div>
              </li>

            ))}
          </ul>
        </div>
      ) : (
        null
      )
      }
    </div >
  )
}

export default Dashboard