import { Request, Response, NextFunction } from "express";

export const errorHandler = (err:any, req: Request, res: Response, next: NextFunction)=>{
    res.status(500).json(
        {
            message: "Unexpected error",
            error: err.message || "Internal server error"
        }
    )
}