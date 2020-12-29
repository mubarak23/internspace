import Joi from "joi";

function validateInnternship(internship) {
  const schema = {
    title: Joi.string().min(3).required(),
    description: Joi.string().required(),
    requirement: Joi.string().required(),
    responsibilities: Joi.string().required(),
    duration: Joi.string().required(),
  };
  const result = Joi.validate(internship, schema);
  return result;
}

export { validateInnternship };
