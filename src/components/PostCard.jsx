import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'
import profileImage from '../assets/profileImage.png'
import heartIG from '../assets/heartIG.png'

function PostCard({$id, title, featuredImage,$createdAt}) {
  const date =  $createdAt
  return (
        
        <>

        <div className="w-80 bg-surface text-onBackgroundText rounded-sm shadow-sm overflow-hidden">
        <div className="py-1 bg-onBackgroundText text-surface">
          <div className="flex p-2 ">
            <img className='w-14  rounded-full' src={profileImage} alt="" />
            <h3 className='p-4 font-mono font-bold'>User_ID</h3>
          </div>
        </div>

          <img className='min-w-full max-h40' src={appwriteService.getFilePreview(featuredImage)} alt="" />
          <div className="py-2 bg-onBackgroundText">
            <div className="">
              {/* <ul className='flex'>
                <li><img className='w-10' src={heartIG} alt="" /></li>
                <li><img className='w-10' src={heartIG} alt="" /></li>
                <li><img className='w-10' src={heartIG} alt="" /></li>
              </ul> */}
            </div>
            
            <div className="">
              <div className="text-surface text-left">
                <h2 className='font-bold mb-2 pl-2'>{title}</h2>
                <p className='pl-2 mb-3'>Embark on a thrilling journey where the boundaries 
                  of imagination dissolve and the pulse of excitement beats in every word!</p>
              </div>
            <Link to={`/post/${$id}`}>
              <p className='text-background flex px-4 mx-2 py-1 bg-primary  w-28 rounded-sm bg-opacity-40 hover:bg-primary hover:text-onBackgroundText'>Read More</p>
            </Link>

              <h3 className='text-surface py-2 mt-5'>Made with ❤{
                
              } </h3>
            </div>
          </div>
        </div>
      </>
  )
}

export default PostCard



{/* <div className="w-60   bg-surface text-onBackgroundText rounded-lg shadow-lg overflow-hidden my-3 flex flex-col flex-auto" >
            <img className="min-w-full max-h-40 " src={appwriteService.getFilePreview(featuredImage)} alt={title} />
            <div className="px-6 py-16 max-h-14">
                <div className="font-bold mb-2">
                    {title}
                   
                </div>
            </div>
        </div>  */}