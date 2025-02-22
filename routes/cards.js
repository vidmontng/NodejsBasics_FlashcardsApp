const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;


router.get('/:id', (req, res) => {

    const {side} = req.query;
    const {id} = req.params;
    const text = cards[id][side];
    const {hint} = cards[id];
    let newSide;

    const templateData = {text, side, id};

    if(side === 'question') {
        newSide = 'answer';
        templateData.hint = hint;
    } else if(side === 'answer') {
        newSide = 'question';
    }
    templateData.side = newSide;
    res.render('card', templateData);
//comment
   
});


module.exports = router;


