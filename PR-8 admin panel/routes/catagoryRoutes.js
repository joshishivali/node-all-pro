const express = require('express');

const routes = express.Router();

const { AddCatagory , ViewCatagory , InsertCatagory , DeleteCatagory ,EditCatagory , UpdateCatagory , ChangeStatus} = require('../controllers/catagoryController');

routes.get('/addcatagory', AddCatagory)
routes.get('/viewcatagory',ViewCatagory)
routes.post('/insertcatagory', InsertCatagory )
routes.get('/deletecatagory', DeleteCatagory )
routes.get('/editcatagory', EditCatagory )
routes.post('/updatecatagory', UpdateCatagory )

// change status 
routes.get('/changestatus', ChangeStatus )



module.exports = routes;
