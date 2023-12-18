import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import AlertContext from '../context/AlertContext'
import messages from '../utils/Messages'

const AddPost = () => {
    const nav = useNavigate()

    const [files, setFiles] = useState()
    const [ status, setStatus ] = useState(true)                       // true means there is no errors, and user can add post
    
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
            if(!e.target.files[i].type.match('image.*') && !e.target.files[i].type.match('video.*')) {
                console.log(!e.target.files[i].type.match('image.*') && !e.target.files[i].type.match('video.*'))
                console.log(e.target.files[i].type.match('image.*'), ";;;;;;;;;;;;;;;")
                setStatus(false)
                setParams(messages["addPost"]["wrongFormat"])
                setAlertStatus(true)
                return
            }
        };
        console.log("irngiuonjthmokntoik")
        // user fixed error, change back to true
        setStatus(true)
        
        setFiles(e.target.files)
    }

    const UploadPost = () => {
        // if user wants to send more than 4 files, wrong format, or weights more than 50mb
        if (!status) {
            console.log("================================   ")
            setParams(messages["addPost"]["unfixedErrors"])
            setAlertStatus(true)
            return                                                   // THERE CODE SHULD STOP ITSELF, IF !satus. It reloads itself after 2 refreshes. THEN DISPLAYS DJANGO ERROR PAGE?????
        }
        console.log(status, "vhuje muje")
        const fd = new FormData();
        for(let i=0; i<files.length; i++){
            fd.append(`images[${i}]`, files[0])
        }
        axios.post('http://127.0.0.1:8000/api/posts/posts/', fd, {
            // onUploadProgress: (ProgressEvent) => { console.log(ProgressEvent.progress * 100 + "%") },
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

    }

  return (
    <div>
        <form method='POST' onSubmit={() => UploadPost()}>
            <textarea maxLength={256} placeholder='Napisz coś ciekawego'></textarea>
            <input onChange={ (e) => AddFiles(e) } type='file' multiple/>
            <input type='submit' value={"Podziel się chwilą"}/>
        </form>
    </div>
  )
}

export default AddPost