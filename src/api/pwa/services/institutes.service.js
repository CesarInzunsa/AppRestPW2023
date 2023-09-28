import institutos from '../models/institutes'
import { OK, FAIL, BITACORA, DATA, AddMSG } from '../../../api/middlewares/respPWA.handler'

export const getInstitutesAll = async () => {

    let bitacora = BITACORA();
    let data = DATA();

    try {
        bitacora.process = 'Extraer todos los institutos';
        data.method = 'GET';
        data.api = '/institutes';
        data.process = 'Extraer todos los institutos de la coleccion de cat_institutos';

        const InstitesAll = await institutos.find().then(instutes => {
            if (!instutes) {
                data.status = 404;
                data.messageDEV = "La base de datos no tiene institutos";
                throw Error(data.messageDEV);
            }

            return instutes;
        })

        //data.status = 200;
        data.messageUSR = "La extraccion de los institutos fue exitosa";
        data.dataRes = InstitesAll;
        bitacora = AddMSG(bitacora, data, 'OK', 200, true);
        return OK(bitacora);

    } catch (error) {
        if (!data.status) data.status = error.statusCode;
        let { message } = error;
        if (!data.messageDEV) data.messageDEV = message;
        if (data.dataRes.length === 0) data.dataRes = error;
        data.messageUSR = "La extracion de los Institutos no fue exitosa";
        bitacora = AddMSG(bitacora, data, 'FAIL');
        return FAIL(bitacora);

    } finally {
        //Haya o no haya error se ejecuta el finally
    }


}