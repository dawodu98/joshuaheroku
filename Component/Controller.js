const {
    getAllEntry, 
    createEntry,
    getSingleEntry, 
    updateSingleEntry,
    deleteSingleEntry, 
} = require("./View");

const express =require("express");
const router = express.Router();

router.route('/').get(getAllEntry).post(createEntry)

router.route('/:id').get(getSingleEntry).patch(updateSingleEntry).delete(deleteSingleEntry)


module.exports = router;