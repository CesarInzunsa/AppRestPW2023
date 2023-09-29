import * as institutesServices from '../services/institutes.service';

////////////////////////////////////////////////////
// *********** GET SECTION INSTITUTES *********** //
////////////////////////////////////////////////////

// GET ALL INSTITUTES
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

/////////////////////////////////////////////////////
// *********** POST SECTION INSTITUTES *********** //
/////////////////////////////////////////////////////

// ADD INSTITUTES
export const addInstitutes = async (req, res, next) => {
    try {
        const InstituteAdded = await institutesServices.addInstitutes(req.body);
        if (InstituteAdded) {
            return res.status(InstituteAdded.status).json(InstituteAdded);
        }
    } catch (error) {
        next(error)
    }
}