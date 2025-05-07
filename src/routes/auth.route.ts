import { Router } from "express";
import AuthController from "../controllers/auth.controller";
// import { errorHandler } from "../middlewares/errorHandler";
// import tokenAuthentication from "../middlewares/tokenAuthentication";

const router = Router();

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);

// router.use(errorHandler);
export default router;
