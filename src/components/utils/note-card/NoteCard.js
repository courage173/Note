import React from 'react';
import './noteCardStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';

const NoteCard = () => {
    return (
        <div className='note-card-wrapper'>
            <div className='note-card-right-side'></div>
            <div className='note-card-left-side'>
                <div className='note-fav-icon-wrap'>
                    <div className='note-fav-icon-container'>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                </div>
                <div className='note-card-text-wrapper'>
                    <h5>Heading</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NoteCard
