import React from 'react';
import './noteCardStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';

const NoteCard = (props) => {
    console.log(props.favourite)
    const handleFav = () => {
        props.runAction(props.id, true)
    }
    return (
        <div className='note-card-wrapper'>
            <div className='note-card-right-side' style={props.bgStyle}></div>
            <div className='note-card-left-side'>
                <div className='note-fav-icon-wrap'>
                    <div className='note-card-date'>{new Date(props.date).toLocaleString()}</div>
                    <div className='note-fav-icon-container' id={props.favourite ? 'note-fav-bg' : null} onClick={handleFav}>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                </div>
                <div className='note-card-text-wrapper'>
                    <h5>{props.heading}</h5>
                    <p>{props.noteBody}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteCard
