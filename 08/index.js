const express = require('express');
const handlers =require('./handlers');

const app = express();

app.use(express.json());

app.get('/', handlers.home);
app.post('/home', handlers.home_post);

app.listen(8080, (err)=>{
    if(err){
        return console.log(err);
    }
    else{
    console.log('Server successfully started...')
    }
});
