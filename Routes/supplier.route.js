const express = require('express');
const { getSuppliers, createAsupplier, getAsupplier } = require('../Controllers/supplier.controler');
const router = express.Router();
router.get('/', getSuppliers) // Get all suppliers
router.post('/', createAsupplier) // Create a supplier
router.get('/:id', getAsupplier) // Get a supplier

module.exports = router;























































