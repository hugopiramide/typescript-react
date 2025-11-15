import { type LoaderFunction, useLoaderData } from 'react-router-dom'
import { type UserResponse } from '../types'

const loader: LoaderFunction = async ({ params }) => {
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    
    if(!response.ok) throw new Response("Datos no encontrados", {status: 404} )

    const user = await response.json()
    return {user , userId: params.userId}

}

const UsersDetails = () => {
    
    const { user, userId } = useLoaderData() as { user: UserResponse; userId: number }
    
    if(user && Object.keys(user).length === 0 && Object.getPrototypeOf(user) === Object.prototype){
        return <h2>Theres no user with id: {userId} </h2>
    }

    return(
        <>
        <p>
            <strong>Name: </strong>
            {user.name}
        </p>
        <p>
            <strong>Email: </strong>
            {user.email}
        </p>
        <p>
            <strong>Phone: </strong>
            {user.phone}
        </p>
        <p>
            <strong>Website: </strong>
            {user.website}
        </p>
        </>
    )
}

UsersDetails.loader = loader

export default UsersDetails