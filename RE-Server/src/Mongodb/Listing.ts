import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const listingSchema = new Schema({
  housename: String,
  title: String!,
  type: String,
  location: String,
  pricetag: String,
  description: String,
  url: String,
  ref: String,
  bed: Number,
  bath: Number,
  park: Number,
  garden: Number,
  price: Number,
  date: Number,
});

export default mongoose.model("Listing", listingSchema);
