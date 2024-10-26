const express = require('express');
const app =  express();
const port = 3000;
const path = require('path');
//parses incoming requests. handles json.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//middleware to serve all static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

//created url which takes parameters and displays names
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//routes http get requests,
//this url takes custom parameters, firstname,lastname
app.get('/hello/:firstname/:lastname', (req, res)=> {
    const firstname = req.params.firstname;
    const lastname = req.params.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

//catches any errors within the server
app.use((err,req,res, next)=>{
    console.error(err.stack);
    res.status(500).send('something went wrong');
});

//listens for connection on specific port
app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
});

//calls get method on the form "name"
app.get('/name', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

//handles data on server,
//this post requst is for the form "name".
app.post('/name', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});