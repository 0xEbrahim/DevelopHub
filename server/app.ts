import express from 'express'
import bodyParser from 'body-parser';
import asyncHandler from 'express-async-handler'
import {db} from './datastore/index'
import morgan from 'morgan'
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(morgan('dev'))

app.get('/api/posts' , asyncHandler(async (req, res, next) => {
    res.send({posts : db.listPosts()});
}))

app.post('/api/posts' , asyncHandler(async (req, res, next) => {
    await db.createPost(req.body);
    res.sendStatus(200);
}))

app.listen(PORT , () => {
    console.log(`Server is running on PORT ${PORT}`)
})