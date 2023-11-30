const router = require("express").Router();
const {
    getAllProduct,
    getProduct,
    searchProduct,
    createProduct
} = require('../controllers/productControllers')

router.get('/', getAllProduct)
router.get('/:id', getProduct)
router.post('/', createProduct)

module.exports = router