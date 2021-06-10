import React, {useState,useEffect} from 'react'
import Modal from 'react-modal'
import Post from './Post'

export default function Popup() {
    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [postArray, setPost] = useState([])

   const popupShow =()=>{
       setIsOpen(true)
   }
   const popupHide =()=>{
    setIsOpen(false)
}
const handelChange=(e)=>{
 console.log(e.target.value);
 setTitle(e.target.value)
}
const handelImage=(e)=>{
    console.log(e.target.value);
    setImage(e.target.value)
   }
   const addPost=()=>{
    setIsOpen(false)
    const c = postArray
    c.push({title:title,image:image})
    setPost(c)
   }
    return (
        <div>
            <button className='button' onClick={popupShow}> Add a post</button>
                <Modal
                    isOpen={isOpen}
                    ariaHideApp={false}
                    onRequestClose={popupHide}
                    contentLabel="Add a post"
            >
                <label> Enter the title</label>
                <input type="text" onChange={handelChange} ></input>
                <label> Enter the image</label>
                <input type="text" onChange={handelImage}></input>
                <button onClick={addPost}> Add a Post </button>
            </Modal>
            
           
            {postArray.map((item)=>{
           return <Post title={item.title} img={item.image} />
        })}
           
            

           
        
        </div>
    )
}
