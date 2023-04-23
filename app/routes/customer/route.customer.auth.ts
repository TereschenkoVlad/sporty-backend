import express, { NextFunction, Request, Response, Router } from "express";

const router: Router = express.Router()

router.post('/auth/register', (req: Request, res: Response, next: NextFunction) => {

});

export default router;
