import express from "express";

const router = express.Router();


router.get("/", (req, res) => {
  return res.json({
    message: "Welcome to the Tweet route"
  });
});

router.get("/:id", (req, res) => {
  return res.json({
    message: "Welcome to the Tweet by ID route",
    id: req.params.id
  });
});

export default router;

