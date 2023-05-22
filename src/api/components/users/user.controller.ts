import { Request, Response } from "express";


export class UserController{
    public list(req:Request, res:Response){
        res.status(200).json({
            list: ["Amanda", "amandaif4598@gmail.com"],
        });
    }

    public getUsuario(req:Request, res:Response){
    res.status(200).json({
     
    });
};

public create(req:  Request, res:Response){
    res.status(201).json({

        name: "nome",
        email: "email",
        user: "usuario",
        password: "senha",

        message: "sucess"
        
    })
}

public update(req:Request, res:Response){
    res.status(200).json({

        message: 'Função update'
    });
};

public destroy(req:Request, res:Response){
    res.status(200).json({
        message: 'função Destroy'
    })
}

}