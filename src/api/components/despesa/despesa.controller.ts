import { Response, Request } from "express";
import { AppDataSource } from "../../../config/databases/mysql-datasource.config";
import { Despesa } from "./despesa.entity";



export class DespesaController{

    public async list(req:Request, res:Response){

        const  despesa = await AppDataSource.manager.find(Despesa);
        res.status(200).json({ dados: despesa });
    }

}