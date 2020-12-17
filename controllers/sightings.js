const db = require('../models');

const index = (req, res) => {
    db.sighting.findAll(
        { order: ['createdAt'] }
    ).then((foundSightings) => {
        if (!foundSightings) return res.json({
            message: 'No Sightings found in database.'
        })
        res.json({ sightings: foundSightings })
    })
        .catch(err => console.log("Error at sighting#index", err))
}

const show = (req, res) => {
    db.sighting.findByPk(req.params.id).then((foundSightings) => {
        if (!foundSightings) return res.json({
            message: 'Sighting with provided ID not found.'
        })

        res.json({ unicorn: foundSightings })
    })
        .catch(err => console.log("Error at unicorn#index", err))
}


const create = (req, res) => {
    db.sighting.create(req.body).then((savedSighting) => {

        res.json({ sighting: savedSighting })
    })
        .catch(err => console.log("Error at sighting#index", err))
}



module.exports = {
    index,
    show,
    create,
};