import { Note } from '../models/note';
export const postNote = (req, res) => {
    try {
        const note = new Note(re.body)
        note.save((err, doc) => {
            if (err) return res.status(400).json({
                success: false,
                message: err.message
            })

            return res.status(201).json({
                success: true,
                data: doc._id
            })
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

export const getSingleNote = (req, res) => {
    try {
        const { id } = req.params
        Note.findOne({ _id: id }, (err, doc) => {
            if (err) return res.status(400).json({
                success: false,
                message: err.message
            })

            return res.status(200).json({
                success: true,
                data: doc
            })
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

export const getAllNote = (req, res) => {
    try {
        Note.find({}, (err, doc) => {
            if (err) return res.status(400).json({
                success: false,
                message: err.message
            })

            return res.status(200).json({
                success: true,
                data: doc
            })
        })
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message
        })
    }
}


