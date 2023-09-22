import instutes from '../models/institutes'
import { OK, FAIl, BITACORA, DATA, AddMsg } from '../../../middlewares/respPWA.handler'

export const getIntitutesAll = async () => {

    let bitacora = BITACORA();
    let data = DATA();

    try {
        bitacora.process = 'Extraer todos los institutos';
        data.method = 'GET';
        data.api = '/institutes';
        data.process = 'Extraer todos los institutos de la coleccion de cat_institutos';

        const InstitesAll = await instutes.find().then(instutes => {
            if (!instutes) {
                data.status = 404;
                data.messageDEV = "La base de datos no tiene institutos";
                throw Error(data.messageDEV);
            }
        })
    } catch (error) {

    } finally {
        //Haya o no haya error se ejecuta el finally
    }


}