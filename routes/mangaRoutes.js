const express = require('express');
const router =  express.Router();

const {getMangas,setMangas,deleteManga,updateManga
} = require('../controllers/mangaController')

router.route('/').get(getMangas).post(setMangas)
router.route('/:id').delete(deleteManga).put(updateManga)

module.exports = router