import { type LoaderFunction, useLoaderData } from 'react-router-dom'
import { type UserResponse } from '../types'

import List from '../components/List'

const loader: LoaderFunction = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const posts = await response.json()
  return posts.slice(0, 10)
    
}

const Users = () => {

    const users = useLoaderData() as UserResponse[]

    return(
        <>
       <h2>Users</h2>
       {users.length === 0 
            ? (<p className='no-items'>No users</p>)
            : (<List items={ users.map(user => ( {link:`/user/${user.id}`, text:`${user.name} (${user.email})`, } )) } />)
        } 
        </>
    )
    
}

Users.loader = loader

export default Users