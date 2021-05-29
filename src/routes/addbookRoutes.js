const express = require('express');
const addbookRoutes = express.Router();




function router(nav){
    addbookRoutes.get('/',function(req,res){
        res.render("addbook",{
            nav,
            title:'Library',
        });
    });

    addbookRoutes.get('/add',function(req,res){
        res.send("dfsgfg");
        });
    
    return addbookRoutes;

}

module.exports = router;
