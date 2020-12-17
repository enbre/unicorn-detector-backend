const db = require('../models');

// not going to need to show all unicorns 
// const index = (req, res) => {
//     db.unicorn.findAll().then((foundUnicorns) => {
//         if(!foundUnicorns) return res.json({
//             message: 'No Unicorns found in database.'
//         })
        
//         // respond with a JSON-ified object of games
//         res.json({ unicorns: foundUnicorns })
//     })
//     .catch(err => console.log("Error at unicorns#index", err))
// }

const show = (req, res) => {
    db.unicorn.findByPk(req.params.id).then((foundUnicorn) => {
        if (!foundUnicorn) return res.json({
            message: 'Unicorn with provided ID not found.'
        })

        res.json({ unicorn: foundUnicorn })
    })
    .catch(err => console.log("Error at unicorn#index", err))
}
// not going to need this
// const create = (req, res) => {
//     db.unicorn.create(req.body).then((savedGame) => {
//         // validations?
        
//         res.json({ unicorn: savedGame })
//     })
//     .catch(err => console.log("Error at games#index", err))
// }
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
    db.unicorn.destroy({
      where: { id: req.params.id }
    }).then(() => {
      res.json({ message: `Game with id ${req.params.id} has been deleted.` })
    })
    .catch(err => console.log("Error at games#index", err))
}


module.exports = {
    // index,
    show,
    // create,
    // update,
    destroy,
};
