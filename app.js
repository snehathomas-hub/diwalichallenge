const express=require("express");
const app=express();
const port=process.env.PORT || 8081;
const nav="";
var nodemailer = require('nodemailer');
const loginRouter=require('./src/routes/loginRoutes')(nav)
//const wishesRouter=require('./src/routes/wishesRoutes')(nav)
const mailRouter=require('./src/routes/mailRoutes')(nav)
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/login',loginRouter);
//app.use('/wisher',wishesRouter);
app.use('/sendmail',mailRouter);
app.get('/',function(req,res){
    res.render("index",
    {
        title:'Library'
    });
});





app.listen(port,()=>{
    console.log("Server ready at" + port);
});
