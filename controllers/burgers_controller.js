const express = require('express');
var router = express.Router()
var burger = require('../models/burgers')
router.get('/', function (req , res){
    res.redirect('/burgers')
})

router.get("/burgers", function(req, res) {
 // express callback response by calling burger.selectAllBurger
    burger.all(function(burgerData) {
// wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
      res.render("index", { burger_data: burgerData });
    });
  });
  router.post("/burgers/create", function(req, res) {
    // express callback response by calling burger.selectAllBurger
       burger.create(req.body.burger_name, function(burgerData) {
   // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
         res.redirect("/");
       });
     });
    router.put("/burgers/:id", function(req, res) {
        // express callback response by calling burger.selectAllBurger
           burger.update(req.params.id, function(burgerData) {
       // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
             res.sendStatus(200)
           });
         });

        module.exports = router;