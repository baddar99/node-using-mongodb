import mongoose from 'mongoose';
import { productSchema } from '../models/models';

const Product = mongoose.model('Product', productSchema);

export const addnewProduct = (req, res) => {
  let newProduct = new Product(req.body);

  newProduct.save((error, Product) => {
    if (error) {
      res.send(error);
    }

    res.json(Product);
  });
};
