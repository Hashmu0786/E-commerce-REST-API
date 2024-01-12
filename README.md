# Product Management API

This project is a simple Node.js and MongoDB RESTful API for managing products and their variants.

## Getting Started
Install dependencies:

-> npm install

### Start the server:
npm start
The server will be running at http://localhost:3000.
### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed and running locally

# API Endpoints
 1. Product and Variant CRUD Operations

  POST /products
  Create a new product with a name, description, price, and variants.
  Example:
  {
  "name": "Laptop",
  "description": "Powerful laptop with high performance",
  "price": 1200,
  "variants": [
    {
      "name": "Color",
      "sku": "ABC123",
      "additionalCost": 100,
      "stockCount": 50
    } 
  ]
}

->  Retrieve All Products
GET /products
Retrieve a list of all products.

-> update a Product
PUT /products/:productId
Update an existing product by ID

-> Delete a Product
  DELETE /products/:productId
  Delete an existing product by ID.

2. Search Functionality

  Search Products
GET /search?q=yoursearchquery
Search products by product name, description, or variant name.

Example:

GET /search?q=Laptop
