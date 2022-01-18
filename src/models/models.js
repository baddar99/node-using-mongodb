import mongoose from 'mongoose';
const { Schema } = mongoose;

export const productsSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  description: String,
  category: String,
  price: Number,
  created_date: { type: Date, default: Date.now },
});
