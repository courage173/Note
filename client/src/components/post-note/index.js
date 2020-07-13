import React, { useState } from 'react';
import './postNoteStyle.css'
import { toast } from 'react-toastify';

const PostNote = (props) => {
    const [heading, setHeading] = useState('')
    const [noteBody, setNoteBody] = useState('')
    const [invalid, setValid] = useState(false)
    const [posted, setPoseted] = useState(false)

    const [id, setId] = useState('')

    const handleSubmit = () => {

        if (heading === '' || noteBody === '') {
            setValid(true)
            setTimeout(() => {
                setValid(false)
            }, 1000)
        } else if (heading && noteBody) {
            setValid(false)
            const body = { title: heading, noteBody }
            const request = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            }
            fetch('http://localhost:3001/v1/post-note', request)
                .then((res) => res.json())
                .then((res) => {
                    if (res.success) {
                        setHeading('')
                        setNoteBody('')
                        setId(res.id)
                        setPoseted(true)
                        toast.success('note posted successfully')
                    }
                })
        }
    }
    return (
        <div className='post-note-wrapper'>
            <div className='post-note-title'>Add New Note</div>
            {posted ? <div>your note is avalaible at <a href={`/note/${id}`}>https//notify-app.herokuapp.com/{id}</a></div> : null}
            <div className='main-note-wrapper'>
                <div className='post-note-heading'>
                    <input
                        type='text'
                        placeholder='Heading'
                        value={heading}
                        onChange={e => setHeading(e.target.value)}
                    />
                </div>
                <div className='post-note-text-body'>
                    <textarea
                        value={noteBody}
                        onChange={e => setNoteBody(e.target.value)}
                        placeholder='Add note here...'
                    />
                </div>
                <div className='post-note-btn-wrap'>
                    <div className='error-btn-wrapper'>
                        {invalid ? <div className='post-error'>one or more fields missing</div> : null}
                        <button onClick={handleSubmit}>create note</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default PostNote
