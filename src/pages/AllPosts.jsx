import React, {useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import '../index.css'

function AllPosts() {
    const [posts, setPosts] = useState([])
    // useEffect(()=>{
        useEffect(()=>{},[])
        appwriteService.getAllPosts([])
        .then((posts)=> {
            if(posts){
                setPosts(posts.documents)
            }
        })
        
    // },[])
  return (
    <div className="w-full py-8 scroll-mt-72">
     

        <Container>
            <div className="flex flex-wrap">

                {posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/1'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>

        </Container>
    </div>
  )
}

export default AllPosts