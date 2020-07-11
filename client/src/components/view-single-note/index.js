import React, { useEffect, useState } from 'react';
import './singleNoteStyle.css';
import NoteCard from '../utils/note-card/NoteCard';

const SingleNote = (props) => {
    let [heading, setheading] = useState('')
    let [noteBody, setNoteBody] = useState('')
    let [date, setDate] = useState('')
    let [loading, setLoading] = useState(true)
    const { id } = props.match.params
    useEffect(() => {
        const request = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
        fetch(`http://localhost:3001/v1/get-single-note/${id}`, request)
            .then((res) => res.json())
            .then((res) => {
                setLoading(false)
                if (res.success) {
                    console.log(res)
                    setheading(res.data.title)
                    setNoteBody(res.data.noteBody)
                    setDate(res.data.date)
                }
            })
    }, [id])
    return (
        <div>
            {loading ? <div style={{ fontWeight: '600', marginLeft: '2rem' }}>loading...</div>
                : <NoteCard
                    heading={heading}
                    noteBody={noteBody}
                    date={date}
                />}
        </div>
    )
}

export default SingleNote
