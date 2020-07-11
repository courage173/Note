import React, { Component } from 'react';
import './saveNoteStyle.css';
import NoteCard from '../utils/note-card/NoteCard';

class SavedNotes extends Component {
    state = {
        data: [],
        loading: true
    }
    componentDidMount() {
        const request = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }
        fetch('http://localhost:3001/v1/get-all-note', request)
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    this.setState({ data: res.data })
                    this.setState({ loading: false })
                }
            })
    }

    updateFavourite = (id, favourite) => {
        const data = this.state.data
        data.forEach((item) => {
            if (item._id === id) {
                item.favourite = favourite
            }
        })
        this.setState({ data: data })
    }


    renderNote = () => {
        return this.state.data.map((item, i) => {
            if (i % 2 === 0) {
                return <div key={item._id}><NoteCard
                    heading={item.title}
                    noteBody={item.noteBody}
                    date={item.date}
                    bgStyle={{ backgroundColor: '#FEEFC3' }}
                    id={item._id}
                    favourite={item.favourite}
                    runAction={this.updateFavourite}
                />
                </div>
            } else {
                return <div key={item._id}><NoteCard
                    heading={item.title}
                    noteBody={item.noteBody}
                    date={item.date}
                    id={item._id}
                    favourite={item.favourite}
                    runAction={this.updateFavourite}
                />
                </div>
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.loading ? <div className='saved-note-loader'>loading...</div> : this.renderNote()}
            </div>
        )
    }
}

export default SavedNotes
