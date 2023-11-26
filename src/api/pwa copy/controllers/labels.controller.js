import * as labelsServices from '../services/labels.service';

////////////////////////////////////////////////////
// *********** GET SECTION LABELS *********** //
////////////////////////////////////////////////////

// GET ALL LABELS
export const getLabelsAll = async (req, res, next) => {
    try {
        const labelsAll = await labelsServices.getLabelsAll();
        if (labelsAll) {
            return res.status(labelsAll.status).json(labelsAll);
        }
    } catch (error) {
        next(error)
    }
}