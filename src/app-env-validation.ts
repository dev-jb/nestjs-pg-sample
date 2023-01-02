import * as Joi from 'joi';
import 'dotenv/config';

export const envValidationSchema = Joi.object({
    /*
        POSTGRES DB INFO
    */
    POSTGRES_HOST: Joi.string().required(),
    POSTGRES_PORT: Joi.string().required(),
    POSTGRES_SERVER_NAME: Joi.string().required(),
    POSTGRES_USER: Joi.string().required(),
    POSTGRES_PASSWORD: Joi.string().required(),
    POSTGRES_DATABASE: Joi.string().required()
});
