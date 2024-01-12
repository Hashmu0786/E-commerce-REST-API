// routes/search.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Schema');

// Search products by name, description, or variant name
router.get('/search', async (req, res) => {
    const query = req.query.q.toLowerCase();
    try {
        const searchResults = await Product.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } },
                { 'variants.name': { $regex: query, $options: 'i' } },
            ],
        });
        res.json(searchResults);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
