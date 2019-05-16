import express from 'express';
import exphbr from 'express-handlebars';
import bodyparser from 'body-parser';
import path from 'path';
import db from './config/database';
const app = express(); 
const PORT = process.env.PORT || 9070;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send('INDEX');
})
app.use('/', require('./router/Users'));
app.listen(PORT, console.log(`Server is running on port ${PORT}`)); 