//Commerce
import ProdServ from '../models/ProdServ';
import boom from '@hapi/boom';


//FIC: GET TODOS LOS PRODUCTOS Y SERVICIOS
export const getProdServList = async () => {
    let prodServList;
    try {
        prodServList = await ProdServ.find();
        return (prodServList);
    } catch (error) {
        //res.status(500).json({ message: 'Error: ' + ficError });
        throw boom.internal(error);
    }
};

//FIC: GET PRODUCT OR SERVICE BY ID; keyType: "OK" (operational key) o "BK" (business key)
export const getProdServItem = async (id, keyType) => {
    let prodServItem;

    try {
        if (keyType === 'OK') {
            prodServItem = await ProdServ.findOne({
                IdProdServOK: id,
            });
        } else if (keyType === 'BK') {
            prodServItem = await ProdServ.findOne({
                IdProdServBK: id,
            });
        }
        return (prodServItem);
    } catch (error) {
        throw boom.internal(error);
    }
};