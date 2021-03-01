const express = require('express');
const router = express.Router();

router.get('/recipes', (req, res) => {
    const str = [
        {
            "title": "PANCAKES",
            "category": "Low Sugar"
        },
        {
            "title": "NOODLES",
            "category": "Lacto Free"
        },
        {
            "title": "CARROUT SOUP",
            "category": "Gluten Free"
        },
    ];
    res.end(JSON.stringify(str));
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});

module.exports = router;