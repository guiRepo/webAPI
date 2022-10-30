import express from "express";
import controller from "../controller/indexController";

const router = express.Router();

router.get("/", controller.user.getAll);
router.get("/:username", controller.user.getUsername);
router.post("/", controller.user.createAt);
router.put("/", controller.user.editAt);
router.delete("/", controller.user.deleteAt);

export default router