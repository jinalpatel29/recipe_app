var recipes = require('../controllers/recipes.js')

module.exports = function(app){
    app.get('/all', function(req,res){
        recipes.show(req,res);
    })

    app.post('/create', function(req,res){       
        recipes.create(req,res);
    })

    app.put('/recipe/:id', function(req,res){
        console.log("in routes");
        recipes.updateRating(req,res);
    })

    app.get('/note/:id', function(req,res){
        recipes.findNote(req,res);
    })

    app.put('/note/:id', function(req,res){
        recipes.update(req,res);
    })

    app.delete('/note/:id', function(req,res){
        recipes.destroy(req,res);
    })

}