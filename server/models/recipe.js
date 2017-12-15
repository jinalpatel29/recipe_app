var mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { Schema } = mongoose;
console.log("in models");
var RecipeSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Recipe title is required'],
        minlength: [5, 'Recipe title must be greater than 5 characters'],
        unique: true
    },
    chef: {
        type: String,
        required: [true, 'Chef name is required'],
        minlength: [2, 'Chef name must be greater than 5 charaters'],
    },
    rating: {
        type: Number,
        default: 0,
    },
    _ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }]
}, {
        timestamps: true
    });
RecipeSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
var Recipe = mongoose.model('Recipe', RecipeSchema);