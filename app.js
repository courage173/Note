import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import { postNote, getSingleNote, getAllNote, updateFavourite, getAllFavourites, search } from './controllers/noteController';
import { validateNote } from './middlewares/validation';
const app = express();

dotenv.config();
mongoose.set('useCreateIndex', true)
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('database connected')).catch(err => console.log(err))


app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/v1/post-note', validateNote, postNote)
app.get('/v1/get-single-note/:id', getSingleNote)
app.get('/v1/get-all-note', getAllNote)
app.patch('/v1/update-favourite/:id', updateFavourite)
app.get('/v1/get-favourite', getAllFavourites)
app.post('/v1/search', search)

export default app