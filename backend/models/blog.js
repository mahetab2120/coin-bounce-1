const mongoose = require('mongoose')
const {Schema}=mongoose

const blogSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, tequired: true},
    photoPath: {type: String, required: true},
    author: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'}
},
{timeseries:true}
)
module.exports = mongoose.model('Blog', blogSchema, 'blog')