const express = require('express');
const app =  express();
const port = 3000;

//created url which takes parameters and displays names
app.get('/hello/:name/:secondName', (req, res)=> {
    const name = req.params.name;
    const secondName = req.params.secondName;
    res.send(`Hello ${name} ${secondName}`);
});

//catches any errors within the server
app.use((err,req,res, next)=>{
    console.error(err.stack);
    res.status(500).send('something went wrong');
});

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
});