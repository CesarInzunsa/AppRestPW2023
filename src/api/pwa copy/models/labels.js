import * as mongoose from 'mongoose';
import config from '../../../config/config';
import obtenerConexion from '../../../config/connectionsFactory';
import obtenerModelo from '../../../config/modelsFactory';


const labelsSchemaPWA = new mongoose.Schema({
	IdInstitutoOK: { type: String },
	IdEtiquetaOK: { type: String },
	Etiqueta: { type: String },
	Indice: { type: String },
	Coleccion: { type: String },
	Seccion: { type: String },
	Secuencia: { type: String },
	valores: [
		{
			_id: false,
			IdValorPA: { type: String },
			IdValorOK: { type: String },
			Valor: { type: String },
			Alias: { type: String },
			Imagen: { type: String },
		}
	],
	detail_row: {
		_id: false,
		Activo: { type: String, default: 'S' },
		Borrado: { type: String, default: 'N' },
		detail_row_reg: [
			{
				_id: false,
				FechaReg: { type: Date, default: Date.now() },
				UsuarioReg: { type: String, default: 'SYSTEM' }
			}
		]
	}
});


//FIC: *******************************************************************
const dbName = config.DATABASE;
const dbCluster = config.CLUSTER;

const conn = obtenerConexion(dbName, dbCluster);

const model = obtenerModelo('cat_etiquetas',
	labelsSchemaPWA,
	conn,
	dbName,
	dbCluster);

export default model;

/* export default mongoose.model(
	'cat_institutos',
	config.PLATFORM==='PWA' ? institutesSchemaPWA : institutesSchemaWEB,
	'cat_institutos'
);
 */
