import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className="w-50  bg-secondary text-onBackgroundText rounded-lg shadow-lg overflow-hidden my-3" >
            <img className="w-full max-h-40 max-w-1xl max-h-1xl" src={appwriteService.getFilePreview(featuredImage)} alt={title} />
            <div className="px-6 py-16 max-h-14">
                <div className="font-bold mb-2">
                    {title}
                </div>
            </div>
        </div> 
      
    </Link>
  )
}

export default PostCard
