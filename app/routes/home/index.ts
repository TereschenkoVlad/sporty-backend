import express, {Request, Response, Router} from "express";

const router: Router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.send('🏠 Home, sweet home ... Not what you were looking for, right?');
});

export default router;
