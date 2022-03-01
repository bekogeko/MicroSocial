import React, { useState }  from "react";
import axios from "axios";


const PostCreate = ()=>{

    const [title,setTitle] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:4000/posts',{
            title
        })
        setTitle('')

    }


    return <div>
        <form OnSubmit={onSubmit}>
            <div className="">
                <label>Title</label>
                <input 
                    value={title}
                    OnChange={e=>setTitle(e.target.value)}
                />
            </div>
            <button className="">Submit</button>
        </form>
    </div>
}
export default PostCreate;