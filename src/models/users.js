import mongoose from "mongoose";

const usuariosCollection = 'usuarios';

const UsuarioSchema = new mongoose.Schema({
    nombre: {type: String, required: true, max: 100},
    apellido: {type: String, required: true, max: 100},
    dni: {type: String, required: true, max: 100},
})

export const usuarios = mongoose.model(usuariosCollection, UsuarioSchema)