import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    noteBody: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }

})


const Note = mongoose.model('Note', noteSchema)

export { Note }