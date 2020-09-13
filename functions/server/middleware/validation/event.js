import { Joi, Segments, celebrate } from 'celebrate'

export const postEvent = celebrate({
  [Segments.BODY]: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { deny: [] } })
      .required(),
      eventDate: Joi.string().required()
  }),
})

