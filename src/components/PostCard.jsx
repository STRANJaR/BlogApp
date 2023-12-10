import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full" src={appwriteService.getFilePreview(featuredImage)} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {title}
                </div>
            </div>
        </div> 
      
    </Link>
  )
}

export default PostCard
