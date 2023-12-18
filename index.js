const express=require('express');
const port=8000;
const app=express();

app.use(express.static('assets'));
app.use('/',require('./routes'));

// setting the views engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err)
{
    if(err)
    {
        console.log(`Error:${err}`);
    }
    console.log(`Server listning on ${port}`);
})