import { Router } from "express";

import auth from "./auth.route";
import oauth from "./oauth.route";

const route: Router = Router();

route.use("/oath", oauth);
route.use("/auth", auth);
// route.use("/auth", user);

route.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});

export default route;
