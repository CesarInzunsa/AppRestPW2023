import mongoose from "mongoose";
import config from "./config";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true
};

const crearConexion = (dbName, dbCluster) => {
    const url = `mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@${dbCluster}/${dbName}?retryWrites=true&w=majority`;

    return mongoose.createConnection(url, options);
}

const obtenerConexion = (dbName, dbCluster) => {
    let { conexion } = mongoose.connections.filter(conn => conn.name === dbName);

    if (!conexion) {
        conexion = crearConexion(dbName, dbCluster);
    }

    return conexion;
}

module.exports = obtenerConexion;