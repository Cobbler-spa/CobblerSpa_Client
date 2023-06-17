import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../styles/Blog.css"
import { toast } from 'react-toastify';
import formatTimestamp from '../helper/FormatDate';
const SingleBlog = () => {
    const {id} = useParams();
    const decodedID = decodeURIComponent(id);
    const [user, setUser] = useState()
    const [blog, setBlog] = useState();

    useEffect(()=>{
        const getBlog = async(id)=>{
            try {
                const response = await fetch(`http://localhost:5000/api/v1/blogs/${id}`,{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json"
                    }
                });

                if(response.ok){
                    const resp= await response.json();
                    setBlog(resp.data.blog);
                    setUser(resp.data.user)
                }
                else{
                    const error= await response.json();
                    toast.error(error.message)
                }
            } catch (error) {
                toast.error(error.message)
            }
        }
        getBlog(decodedID)
    },[decodedID])
  return (
    <>
        <section id='singleBlog' >
            <div className='blogContainer' >
                <div className='blogBox' >

                
                <p className='blogTitle' >{blog?.title}</p>
                <article className='userInfo'  >
                    <p className='userName'>{user?.name}</p>
                    <p className='time'>{formatTimestamp(blog?.timestamp)}</p>
                </article>
                <img style={{width:"100%", height:"25rem"}} src={blog?.image} alt='title'/>
                <div  dangerouslySetInnerHTML={{__html:blog?.description}}></div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SingleBlog