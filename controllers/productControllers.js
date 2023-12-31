const Product = require("../models/Products");

module.exports = {
  createProduct: async (req, res) => {
    console.log(req.body)
    const newProduct = new Product(req.body);
    try {
      await newProduct.save();
      res.status(200).json("Product Create Successfully");
    } catch (err) {
      res.status(500).json("Failed to create Product");
    }
  },

  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json("Failed to get Product");
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json("Failed to get Product");
    }
  },

  searchProduct: async (req, res) => {
    try {
      const result = await Product.aggregate([
        {
          $search: {
            index: "furniture",
            text: {
              query: req.params.key,
              path: {
                wildcard: "*",
              },
            },
          },
        },
      ]);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json("Failed to get Product");
    }
  },
};
