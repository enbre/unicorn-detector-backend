const db = require('../models');

const index = (req, res) => {
    db.sighting.findAll(
      {order: ['createdAt']}
    ).then((foundSightings) => {
        if(!foundSightings) return res.json({
            message: 'No Sightings found in database.'
        })
        // respond with a JSON-ified object of games
        res.json({ unicorns: foundSightings })
    })
    .catch(err => console.log("Error at sighting#index", err))
}

// not going to need this
// const show = (req, res) => {
//     db.unicorn.findByPk(req.params.id).then((foundUnicorn) => {
//         if (!foundUnicorn) return res.json({
//             message: 'Game with provided ID not found.'
//         })

//         res.json({ unicorn: foundUnicorn })
//     })
//     .catch(err => console.log("Error at unicorn#index", err))
// }
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
// const destroy = (req, res) => {
//     db.unicorn.destroy({
//       where: { id: req.params.id }
//     }).then(() => {
//       res.json({ message: `Game with id ${req.params.id} has been deleted.` })
//     })
//     .catch(err => console.log("Error at games#index", err))
// }


module.exports = {
    index,
   //  show,
    create,
   //  update,
   //  destroy,
};