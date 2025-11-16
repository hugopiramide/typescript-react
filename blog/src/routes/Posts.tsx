import { type LoaderFunction, useLoaderData } from 'react-router-dom'
import type { PostResponse } from '../types'
import List from '../components/List'

const loader: LoaderFunction = async ({ request }) => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    const searchParams = new URL(request.url).searchParams
    const userId = searchParams.get('userId')

    if(userId){
        return posts.filter((post: PostResponse) => post.userId === +userId)
    }

    return posts

}

const Posts = () => {
    
    const posts = useLoaderData() as PostResponse[]
    return(
        <>
         <h2>Posts</h2>   
         {posts.length === 0 
         ? ( <p className='no-items'>No posts</p> ) 
         : ( <List items={posts.map(post => ({ link:`/posts/${post.id}`, text: post.title }))} /> )
        }
        </>
    )
}

Posts.loader = loader

export default Posts