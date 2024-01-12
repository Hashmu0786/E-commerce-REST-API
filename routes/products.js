// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Schema');

// Create a product
router.post('/products', async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Retrieve all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a product by ID
router.put('/products/:productId', async (req, res) => {
    const productId = req.params.productId;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a product by ID
router.delete('/products/:productId', async (req, res) => {
    const productId = req.params.productId;
    try {
        await Product.findByIdAndDelete(productId);
        res.json({ message: `Product with ID ${productId} deleted.` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
