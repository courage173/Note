import Validator from 'validatorjs';

const errorMessages = {
    required: 'the :attribute is required',
    email: 'the email format is invalid',
    min: 'Min :attribute limit is :min',
    max: 'Max :attribute limit is :max',
};

const validateCredentials = (req, res, next, rules) => {
    const validator = new Validator(req.body, rules, errorMessages);
    if (validator.passes()) {
        return next();
    }
    const errors = validator.errors.all();
    return res.status(400).json({
        message: 'Invalid Credentials',
        errors
    });
};

export const validateNote = (req, res, next) => {

    const rules = {
        title: 'required',
        noteBody: 'required',
    };
    return validateCredentials(req, res, next, rules);
};



