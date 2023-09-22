import mongoose from "mongoose";
import config from "./config";

const crearModelo = (nombre, schema, conexion) => {
    const modelo = conexion.model(nombre, schema, nombre);
    return modelo;
}

const obtenerModelo = (nombre, schema, conexion, dbCluster) => {
    let message = '';
    let model;

    if (!conexion.modelNames().includes(nombre)) {
        model = conexion.model(nombre);

        message = dbName + '.' + nombre;
        console.log('FIC: CREATE COLLECTION: ======> ' + message);
    } else {
        model = crearModelo(nombre, schema, conexion);

        message = dbName + '.' + nombre;
        console.log('FIC: OMITTED COLLECTION: ======> ' + message);
    }

    return model;
}

module.exports = obtenerModelo;