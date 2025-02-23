import type { NextFunction, Request, Response } from "express";

type AsyncController = (req: Request, res: Response, next: NextFunction) => Promise<void>;

export const asyncHandler = (controller: AsyncController): AsyncController => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await controller(req, res, next);
    } catch (error) {
        next(error);
    }
}