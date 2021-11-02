const express=require('express');
const loginRouter=express.Router();
function router(nav){
    
    loginRouter.get('/',function(req,res){
        let name=req.query.name;
        console.log(name);
        res.render('home',{
            title:'Diwali wisher',
            name:name
        })   

    });

    // loginRouter.get('/:name',function(req,res){
    //     const name=req.params.name;
    //     res.render('home',{
    //         name,
    //         title:'Library'
    //     })
       
    // console.log(name);
    // });

    return loginRouter;

}

module.exports=router;
