import ModelIngrediente from "../models/ModelIngrediente.js";

class ControllerIngrediente{

    static async getStockMenor(req, res, next) {
        res.json( await ModelIngrediente.getStockMenor());
    }

    static async aumentarPrecio(req, res, next){
        res.json( await ModelIngrediente.aumentarPrecio());
    }
}

export default ControllerIngrediente;