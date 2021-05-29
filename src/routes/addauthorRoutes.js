const express = require('express');
const addauthorRoutes = express.Router();

function router(nav){
    addauthorRoutes.get('/',function(req,res){
        res.render("addauthor",{
            nav,
            title:'Library',
        });
    });

    return addauthorRoutes;

}

module.exports = router;


