var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');

module.exports = {
    show: function (req, res) {
        Recipe.find({}).sort({ createdAt: -1 }).exec(function (err, recipes) {
            if (err) {
                res.json({ "status": "error" })
            } else {
                console.log("in show recipes");
                console.log(recipes);
                res.json(recipes);
            }
        });
    },

    create: function (req, res) {
        console.log("in controller");
        console.log(req.body);
        Recipe.create(req.body)
            .then(recipe => res.json(recipe))
            .catch(error => console.log(error));
    },

    updateRating: function(req,res){
        console.log("in controller");
        console.log(req.body);
        Recipe.findByIdAndUpdate(req.params.id, { rating: req.body.rating }, function (err, recipe) {
            if (err) {
                res.json({ "status": "error" })
            } else {
                res.json(recipe);                
            }
        })
    },

    findRecipe: function (req, res) {
        Recipe.findOne({ _id: req.params.id }, function (err, Recipes) {
            if (err) {
                res.json({ "status": "error" })
            } else {
                res.json(Recipes);
            }
        });
    },

    update: function (req, res) {
        Recipe.findByIdAndUpdate(req.params.id, { text: req.body.text, author: req.body.author }, function (err, Recipe) {
            if (err) {
                res.json({ "status": "error" })
            } else {
                res.json(Recipe);                
            }
        })
    },

    destroy: function(req,res){
        console.log("In controllers")
        Recipe.remove({_id:req.params.id}, function(err, Recipe){
            if (err) {
                console.log(err);
                res.json({ "status": "error" })
            } else {
                res.json(Recipe);                
            }
        })
    }
}