import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { MDBTextArea, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import FileBase from "react-file-base64";
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
const AddBlog = () => {
    const [description, setDescription] = useState('');
    const [title, setTitle]= useState("")
    const [imageURL, setImageURL] = useState("")
    const [subTitle, setsubTitle] = useState("")
    const {user} = useSelector((state)=>({...state.auth}))

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(imageURL)


        if(user && title && subTitle && imageURL && description){
            const trimmedTitle =  title.trim()
            const trimmedSubTitle =  subTitle.trim()
            const trimmedDescription =  description.trim()
            try {
                const response = await fetch("http://localhost:5000/api/v1/blogs/addblog", {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        title:trimmedTitle,
                        description:trimmedDescription,
                        image:imageURL,
                        userId:user.id,
                        subtitle:trimmedSubTitle
                    })
                });

                if(response.ok){
                    const resp= await response.json();
                    console.log(resp);
                    toast.success("Blog Posted Successfully!")
                    setDescription("")
                    setImageURL("")
                    setTitle("")
                    setsubTitle("")
                }
                else{
                    const error= await response.json()
                    toast.error(error.message)
                }
            } catch (error) {
                toast.error("Something went wrong")
            }
        }else{
            toast.error("Fields cannot be empty and user must be Admin")
        }

    }
  return (
    <>
    <section id='addblogSec'  style={{paddingTop:"5rem", background:"black"}}>
        <div  style={{background:"white", width:"100%",  paddingBlock:"1rem"}}>
            <p style={{textAlign:"center", textTransform:"uppercase", fontFamily:"oswald, poppins", fontSize:"2rem", letterSpacing:"4px"}}>Add Blog</p>
            <div style={{width:"5rem", height:"0.25rem", background:"black", margin:"1rem auto"}}></div>
            <div style={{width:"80%", margin:"auto", borderRadius:"10px", padding:"0.2rem"}}>
                <form onSubmit={handleSubmit}>
                <MDBInput label='Title' className='mb-4' id='typeText' type='text' value={title} onChange={(e)=> setTitle(e.target.value)}/>
                <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setImageURL(base64)
                }
              />
              <MDBTextArea className='m-4' label='Small Description' id='textAreaExample' rows={2}  value={subTitle} onChange={(e)=> setsubTitle(e.target.value)}/>
                <ReactQuill className='mb-4' theme="snow" value={description} onChange={setDescription} />
                <MDBBtn outline  color='dark' style={{margin:"auto", display:"block", padding:"0.4rem 1rem", borderRadius:"20px" }} type='submit'>Submit</MDBBtn>
                </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default AddBlog