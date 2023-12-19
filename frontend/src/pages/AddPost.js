import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import AlertContext from '../context/AlertContext'
import messages from '../utils/Messages'

const AddPost = () => {
    const nav = useNavigate()

    const [files, setFiles] = useState()
    const [ status, setStatus ] = useState(true)                       // true means there is no errors, and user can add post
    const [ description, setDescription ] = useState("")

    const { setParams, setAlertStatus } = useContext(AlertContext)

    const AddFiles = (e) => {
        // limit files to 4
        if (e.target.files.length > 4){
            setStatus(false)
            setParams(messages["addPost"]["tooManyFiles"])
            setAlertStatus(true)
            return
        }

        // if file is not image or video
        for (let i = 0; i < e.target.files.length; i++) {
            if(!["image", "video"].includes(e.target.files[i].type.slice(0,5))) {
                setStatus(false)
                setParams(messages["addPost"]["wrongFormat"])
                setAlertStatus(true)
                return
            }
        };
        // user fixed error, change back to true
        setStatus(true)
        
        setFiles(e.target.files)
    }

    const UploadPost = async (e) => {
        e.preventDefault()
        // if user wants to send more than 4 files, wrong format, or weights more than 50mb
        if (!status) {
            setParams(messages["addPost"]["unfixedErrors"])
            setAlertStatus(true)
            return                                                   // THERE CODE SHOULD STOP ITSELF, IF !satus. It reloads itself after 2 refreshes. THEN DISPLAYS DJANGO ERROR PAGE?????
        }
        const formData = new FormData();
        for(let i=0; i<files.length; i++){
            formData.append(`images[${i}]`, files[i])
        }
        fetch('http://127.0.0.1:8000/api/posts/post/', {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: {
                "image": formData,
                "description": description
            }
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

  return (
    <div>
        <form method='POST' onSubmit={(e) => UploadPost(e)}>
            <textarea maxLength={256} onChange={() => setDescription()} placeholder='Napisz coś ciekawego'></textarea>
            <input onChange={ (e) => AddFiles(e) } type='file' multiple/>
            <input type='submit' value={"Podziel się chwilą"}/>
        </form>
    </div>
  )
}

export default AddPost