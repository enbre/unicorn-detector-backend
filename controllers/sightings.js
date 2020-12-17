const db = require('../models');

const index = (req, res) => {
    db.sighting.findAll(
      {order: ['createdAt']}
    ).then((foundSightings) => {
        if(!foundSightings) return res.json({
            message: 'No Sightings found in database.'
        })
        // respond with a JSON-ified object of games
        res.json({ sightings: foundSightings })
    })
    .catch(err => console.log("Error at sighting#index", err))
}

// not going to need this
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
        // validations?
        
        res.json({ sighting: savedSighting })
    })
    .catch(err => console.log("Error at sighting#index", err))
}

// not going to need this
// const update = (req, res) => {
//     // make the update route
//     db.unicorn.update(req.body, {
//       where: {
//         id: req.params.id
//       }
//     }).then((updatedGame) => {
//         // Validations and error handling here
//         res.json({ unicorn: updatedGame })
//     })
//     .catch(err => console.log("Error at games#index", err))
// }

//not going to need this
const destroy = (req, res) => {
    db.sightings.destroy({
      where: { id: req.params.id }
    }).then(() => {
      res.json({ message: `Sighting with id ${req.params.id} has been deleted.` })
    })
    .catch(err => console.log("Error at sighting#index", err))
}


module.exports = {
    index,
    show,
    create,
   //  update,
    destroy,
};