import React, { useState } from 'react';
import './sidebarStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons/faStickyNote';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons/faNotesMedical';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';

const Sidebar = () => {
    let [search, setSearch] = useState('')
    return (
        <div className='sidebar-wrapper'>
            <div className='sidebar-top-wrap'>
                <input
                    type='text'
                    placeholder='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div>
                <div className='sidebar-btm-columns'>
                    <FontAwesomeIcon icon={faNotesMedical} style={{ marginLeft: 20, color: '#5BE3C2' }} />
                    <div className='sidebar-title-container'><h4>create New notes</h4></div>
                </div>
                <div className='sidebar-btm-columns'>
                    <FontAwesomeIcon icon={faStickyNote} style={{ marginLeft: 20, color: '#5BE3C2' }} />
                    <div className='sidebar-title-container'><h4>Saved notes</h4></div>
                </div>
                <div className='sidebar-btm-columns'>
                    <FontAwesomeIcon icon={faHeart} style={{ marginLeft: 20, color: '#5BE3C2' }} />
                    <div className='sidebar-title-container'><h4>Favourites</h4></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
