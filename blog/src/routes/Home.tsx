import { type LoaderFunction, useLoaderData } from 'react-router-dom'
import { type PostResponse } from '../types'
import List from '../components/List'

const loader: LoaderFunction = async () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()
  return posts.slice(0, 10)

}

const Home = () => {

    const posts = useLoaderData() as PostResponse[]

    return(
        <>
        <h2>Feature Posts</h2>
        {posts.length === 0 
            ? (<p className="no-items">No Posts</p>)
            : (<List items={posts.map(post => ({ link:`/posts/${post.id}`, text:post.title }))} />)
        }
        </>
    )
}

export default Home