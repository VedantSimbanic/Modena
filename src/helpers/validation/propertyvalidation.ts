import Joi from "joi";

export const propertyValidationSchema = Joi.object({
  agentId: Joi.string().required(),
  title: Joi.string().required(),
  propertyImages: Joi.array().items(Joi.string()).required(),
  price: Joi.string().required(),
  address: Joi.string().required(),
  bedrooms: Joi.number().integer().min(0).required(),
  bathrooms: Joi.number().integer().min(0).required(),
  isDeleted: Joi.boolean().default(false),
  createdAt: Joi.date().default(Date.now),
});
