import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
                    <div className='sidebar-title-container'><Link to='/'>create New notes</Link></div>
                </div>
                <div className='sidebar-btm-columns'>
                    <FontAwesomeIcon icon={faStickyNote} style={{ marginLeft: 20, color: '#5BE3C2' }} />
                    <div className='sidebar-title-container'><Link to='/save-notes'>Saved notes</Link></div>
                </div>
                <div className='sidebar-btm-columns'>
                    <FontAwesomeIcon icon={faHeart} style={{ marginLeft: 20, color: '#5BE3C2' }} />
                    <div className='sidebar-title-container'><Link to='/favourite'>Favourites</Link></div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Sidebar)
