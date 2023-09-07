import  conexion  from "../config/atlas.js";
import getNextSequenceValue from '../db/autoIncrement.js'
const db = await conexion();
const Ingrediente = db.collection("ingrediente");

class ModelIngrediente {
    /**
     * *Encontrar todos los ingredientes con stock menor a 400
     */
    static async getStockMenor(){
        return await Ingrediente.find({stock: {$lte: 400}}).toArray();
    }

    /**
     * * Aumentar el precio en 1.5 a todo los ingredientes
    */
    static async aumentarPrecio(){
        return await Ingrediente.updateMany({}, { $mul: { precio_unitario: 1.5 } })
    }
}

export default ModelIngrediente;