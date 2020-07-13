import { Note } from '../models/note';
export const postNote = (req, res) => {
    try {
        const note = new Note(req.body)
        note.save((err, doc) => {
            if (err) return res.status(400).json({
                success: false,
                message: err.message
            })

            return res.status(201).json({
                success: true,
                id: doc._id
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

export const updateFavourite = (req, res) => {
    try {
        const { id } = req.params
        const { favourite } = req.body
        Note.findOneAndUpdate({ _id: id },
            { $set: { "favourite": favourite } },
            { new: true },
            (err, doc) => {
                if (err) return res.json({ success: false, err })
                return res.status(200).json({
                    success: true,
                    favourite: doc.favourite
                })
            }
        )
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

export const getAllFavourites = (req, res) => {
    try {
        Note.find({ favourite: true }, (err, doc) => {
            if (err) return res.json({ success: false, err })
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

export const search = (req, res) => {
    try {
        let { searchWord } = req.body

        Note.find({ $text: { $search: searchWord } }, (err, doc) => {
            if (err) return res.json({ success: false, err })
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
