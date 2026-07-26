import { Router, type Router as ExpressRouter } from "express";

const router: ExpressRouter = Router();

router.get("/", (req, res) => {
  res.json({
    status: "ok",
  });
});

export default router;