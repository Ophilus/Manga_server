const asyncHandler = require('express-async-handler')

const Manga = require('../models/mangaModel')

const getMangas = asyncHandler( async (req, res) => {
    const manga = await Manga.find()
    res.status(200).json(manga)
})

const setMangas = asyncHandler(async (req, res) => {
    if (!req.body.name||!req.body.nameRus||!req.body.chapter||!req.body.img) {
        res.status(400)
        throw new Error('Please add a text field')
      }
    
      const manga = await Manga.create({
        name: req.body.name,
        nameRus: req.body.nameRus,
        chapter: req.body.chapter,
        img: req.body.img
      })
    
      res.status(200).json(manga)
  })

  const updateManga = asyncHandler(async (req, res) => {
    const manga = await Manga.findById(req.params.id)
  
    if (!manga) {
      res.status(400)
      throw new Error('Manga not found')
    }
  
  
    const updatedManga = await Manga.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedManga)
  })
  
 
  const deleteManga = asyncHandler(async (req, res) => {
    const manga = await Manga.findById(req.params.id)
  
    if (!manga) {
      res.status(400)
      throw new Error('Manga not found')
    }
  
  
    await manga.deleteOne()
  
    res.status(200).json({ id: req.params.id })
  })

module.exports = {
    getMangas,
    setMangas,
    updateManga,
    deleteManga
}