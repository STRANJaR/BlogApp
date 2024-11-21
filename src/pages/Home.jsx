import React, {useEffect, useState} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
import ParticlesConfig from '../components/ParticlesConfig'
import '../index.css'
function Home() {
    const [posts , setPosts] = useState([])

    useEffect(()=>{
        appwriteService.getAllPosts()
        .then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    }, [])

    if(posts.length === 0){
        return (
            <div className="tsparticles bg-surface  h-auto">
             <ParticlesConfig/>
        </div>
        )
    }
    return(
        
        <div className="tsparticles bg-surface  h-auto">
             <ParticlesConfig/>
             {/* <ParticlesAuth/> */}
             
        </div>
       
    )
}

export default Home
