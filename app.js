const express = require('express');
const bodyPraser =  require('body-parser');
const path = require('path');
const pdfRoute = require('./routes/pdf')

const port  = 5000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyPraser.urlencoded({extended: true}))
app.get('/', (req, res, next) => {
    res.sendFile('index.html');
})

app.use('/pdfMake', pdfRoute)
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})