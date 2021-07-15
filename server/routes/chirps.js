// * In `routes/chirps.js`, create `GET`, `POST`, `PUT`, `DELETE` methods on a router that is created in `chirps.js`.
//   * Import `chirpsstore`, and use it to read and write chirps to the json file.
//     * The json file will be created the first time you run successfully!
//     * Remember to export your router with `module.exports`.


const express = require('express');
const chirpStore = require('../chirpstore.js');
const router = express.Router();

// Gets all chirps if an id is not specified, gets only a specific chirp if ID is specified.
router.get('/:id?', (req, res) => {
    const id = req.params.id
    if(id) {
        res.json(chirpStore.GetChirp(id))
    } else {
        res.send(chirpStore.GetChirps())
    }
});


// Creates a chirp
router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
})

// PUT a specific chirp (edit)
router.put("/:id", (req, res) => {
    const id = req.params.id;
    chirpstore.UpdateChirp(id, req.body);
    res.sendStatus(200);
});

// DELETE a specific chirp
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    chirpstore.DeleteChirp(id);
    res.sendStatus(200);
});


module.exports = router;