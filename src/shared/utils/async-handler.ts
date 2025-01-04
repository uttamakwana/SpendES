import { Request, Response, NextFunction } from "express-serve-static-core";

type AsyncController<T = void> = (req: Request, res: Response, next: NextFunction) => Promise<T>;

export function asyncHandler<T = void>(controller: AsyncController<T>): (req: Request, res: Response, next: NextFunction) => Promise<void> {
    return async (req, res, next) => {
        try {
            await controller(req, res, next);
        } catch (error) {
            next(error); // Pass errors to the error-handling middleware
        }
    };
}
