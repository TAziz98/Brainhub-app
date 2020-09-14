import Joi from "joi";

const schema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { deny: [] } })
    .required(),
  date: Joi.string().required(),
});

export const validate = (data) => schema.validate(data, { abortEarly: false });
