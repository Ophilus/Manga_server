const mongoose = require('mongoose')

const mangaSchema = new mongoose.Schema({
  name: String,
  nameRus: String,
  chapter: Number,
  img: String
  });
  
  module.exports = mongoose.model('Manga', mangaSchema);

