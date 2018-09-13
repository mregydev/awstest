const app=require('express')();

app.get('/test',(req,res)=>
{
res.send('this is the first aws application');
});

app.listen(8000);