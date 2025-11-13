import { type LoaderFunction, useLoaderData } from 'react-router-dom'
import { type UserResponse } from '../types'

const loader: LoaderFunction = async ({ params }) => {
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    
    if(!response.ok) throw new Response("Datos no encontrados", {status: 404} )

    const user = await response.json()
    return {user , userId: params.userId}

}

const UsersDetails = () => {
    return(
        <>
        </>
    )
}

UsersDetails.loader = loader

export default UsersDetails