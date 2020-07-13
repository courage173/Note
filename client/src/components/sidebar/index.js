import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './sidebarStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons/faStickyNote';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons/faNotesMedical';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowCircleRight';

const Sidebar = () => {
    let [search, setSearch] = useState('')
    let [searchData, setSearchData] = useState([])
    const handleSearch = (e) => {
        setSearch(e.target.value)

        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ searchWord: search })
        }
        fetch('http://localhost:3001/v1/search', request)
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    setSearchData(res.data)
                }
            })
    }

    const showSearch = () => {
        return searchData.map((item, i) => (
            <div className='search-result-wrapper' key={i}>
                <a href={`/note/${item._id}`}>{item.title}
                    <FontAwesomeIcon icon={faArrowCircleRight} style={{ marginLeft: 20, color: '#5BE3C2' }} />
                </a>

            </div>
        ))
    }
    return (
        <div className='sidebar-wrapper'>
            <div className='sidebar-top-wrap'>
                <input
                    type='text'
                    placeholder='Search by title'
                    value={search}
                    onChange={(e) => handleSearch(e)}
                />
            </div>
            <div className='search-wrapp' id={searchData.length > 0 ? 'search-wrap' : null}>
                {showSearch()}
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
