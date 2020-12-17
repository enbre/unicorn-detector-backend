const db = require('../models');

// to show all unicorns 
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



module.exports = {
    // index,
    show,

};
