import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import { postNote, getSingleNote, getAllNote, updateFavourite, getAllFavourites, search } from './controllers/noteController';
import { validateNote } from './middlewares/validation';
const app = express();

dotenv.config();
mongoose.set('useCreateIndex', true)
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://courage:pedro123@cluster0.qdob5.mongodb.net/notify?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('database connected')).catch(err => console.log(err))


app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use(express.static('./client/build'))



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/v1/post-note', validateNote, postNote)
app.get('/v1/get-single-note/:id', getSingleNote)
app.get('/v1/get-all-note', getAllNote)
app.patch('/v1/update-favourite/:id', updateFavourite)
app.get('/v1/get-favourite', getAllFavourites)
app.post('/v1/search', search)

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

export default app