import React, { Component } from 'react';
import './favouriteStyle.css';
import NoteCard from '../utils/note-card/NoteCard';

class Favourite extends Component {
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
        fetch('https://notify-appl.herokuapp.com/v1/get-favourite', request)
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
        const filteredData = data.filter((item) => item._id !== id)
        this.setState({ data: filteredData })
    }


    renderNote = () => {
        return this.state.data.length < 1 ?
            <div className='no-fav-wrap'>Opps! no favourite Note</div>
            :
            this.state.data.map((item, i) => {
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

export default Favourite
