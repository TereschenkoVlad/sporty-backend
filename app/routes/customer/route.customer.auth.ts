import express, { NextFunction, Request, Response, Router } from "express";
import {customerRegister} from "../../controllers/customer/controller.customer.auth";

const router: Router = express.Router()

router.post('/auth/register', async (req: Request, res: Response, next: NextFunction) => {
  await customerRegister(req, res, next);
});

export default router;
