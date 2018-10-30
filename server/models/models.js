  const mongoose = require('mongoose')

  let BookSchema = mongoose.Schema({
    name: String,
    genre: String,
    authorID: String
  })

  let AuthorSchema = mongoose.Schema({
    name: String,
    age: Number,
  })

  let Book = mongoose.model('Book', BookSchema)
  let Author = mongoose.model('Author', AuthorSchema)

module.exports ={
  Book,
  Author
}