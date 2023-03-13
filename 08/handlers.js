const home =(req, res)=>{
    res.send('THIS IS HOME');
}

const home_post=(req, res)=>{
    // console.log(req.body);
    // res.send('Success');
    res.json(req.body);
}

module.exports={
    home,
    home_post
}