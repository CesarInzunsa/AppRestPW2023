import labels from '../models/labels'
import { OK, FAIL, BITACORA, DATA, AddMSG } from '../../middlewares/respPWA.handler'

////////////////////////////////////////////////////
// *********** GET SECTION LABELS *********** //
////////////////////////////////////////////////////

// GET ALL LABELS
export const getLabelsAll = async () => {

    let bitacora = BITACORA();
    let data = DATA();

    try {
        bitacora.process = 'Extraer todos los labels';
        data.method = 'GET';
        data.api = '/labels';
        data.process = 'Extraer todos los labels de la coleccion de cat_labels';

        const LabelsAll = await labels.find().then(labels => {
            if (!labels) {
                data.status = 404;
                data.messageDEV = "La base de datos no tiene labels";
                throw Error(data.messageDEV);
            }

            return labels;
        })

        //data.status = 200;
        data.messageUSR = "La extraccion de los labels fue exitosa";
        data.dataRes = LabelsAll;
        bitacora = AddMSG(bitacora, data, 'OK', 200, true);
        return OK(bitacora);

    } catch (error) {
        if (!data.status) data.status = error.statusCode;
        let { message } = error;
        if (!data.messageDEV) data.messageDEV = message;
        if (data.dataRes.length === 0) data.dataRes = error;

        data.messageUSR = "La extracion de los labels no fue exitosa";
        bitacora = AddMSG(bitacora, data, 'FAIL');

        return FAIL(bitacora);

    } finally {
        //Haya o no haya error se ejecuta el finally
    }
}