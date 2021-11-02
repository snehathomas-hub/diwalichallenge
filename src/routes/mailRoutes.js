const express=require('express');
const mailRouter=express.Router();
var nodemailer = require('nodemailer');
function router(nav){

    mailRouter.post('/',function(req,res){
       
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sneharijothomas@gmail.com',
          pass: 'sneharijo1825'
        }
      });
      let name=req.body.name;
      let email=req.body.email;
      console.log(req.body);
 
      var mailOptions = {
        from: 'sneharijothomas@gmail.com',
        to: email,
        subject: 'Diwali wish.',
        text: 'Here is the first diwali wish for you this year.Please check it out at https://snehadiwaliwish.herokuapp.com/'
      };
      
      transporter.sendMail(mailOptions, function(err, data){
        if (err) {
          console.log(err);
          res.json({success:false});
          console.log('Error occured.')
        } else {
         // console.log('Email sent: ' + info.response);
         res.json({ success:true, name:name});
         console.log("Email sent succesfully.")
        }
      });

      //res.send("Wishes Reached");
      // res.status('Wishes reached').send(name)
    });
    return mailRouter;
}
module.exports=router;

