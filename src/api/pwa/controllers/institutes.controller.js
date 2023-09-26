import * as institutesServices from '../services/institutes.service';

export const getInstitutesAll = async (req, res, next) => {
    try {
        const institutesAll = await institutesServices.getInstitutesAll();
        if (institutesAll) {
            return res.status(institutesAll.status).json(institutesAll);
        }
    } catch (error) {
        next(error)
    }
}