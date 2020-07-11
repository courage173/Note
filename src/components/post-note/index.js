import React, { useState } from 'react';
import './postNoteStyle.css'

const PostNote = () => {
    const [heading, setHeading] = useState('')
    const [noteBody, setNoteBody] = useState('')
    return (
        <div className='post-note-wrapper'>
            <div className='post-note-title'>Add New Note</div>
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
                    <button>create note</button>
                </div>
            </div>
        </div>
    )
}

export default PostNote
