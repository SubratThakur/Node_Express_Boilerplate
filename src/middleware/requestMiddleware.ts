// Return an Express middleware function
import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isLoggedIn = (req: Request, res: Response, next: NextFunction):Response<any, Record<string, any>> | void => {
    if (!req.headers.authorization) {
        return res.status(401).json({ error: "Authorization header is missing in request!" });
    }
    next();
};