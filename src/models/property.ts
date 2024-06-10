import mongoose, { Schema, Document } from "mongoose";

export interface IProperty extends Document {
  agentId: mongoose.Types.ObjectId;
  title: string;
  propertyImages: string[];
  price: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  isDeleted: boolean;
  createdAt: Date;
}

const PropertySchema: Schema = new Schema({
  agentId: { type: mongoose.Types.ObjectId, ref: "Agent", required: true },
  title: { type: String, required: true },
  propertyImages: { type: [String], required: true },
  price: { type: String, required: true },
  address: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Property = mongoose.model<IProperty>("Property", PropertySchema);

export default Property;
