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
            // <div className="w-full py-8 mt-1 text-center">
            //     <Container>
            //         <div className="flex flex-wrap">
            //             <div className="p-2 w-full">
            //                 <h1 className='text-2xl
            //                 font-bold hover:text-gray-500'>
            //                     Login to Read Posts ! 
                                
            //                 </h1>
            //             </div>
            //         </div>
            //     </Container>
            // </div>
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
