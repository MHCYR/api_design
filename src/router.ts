import { Router } from "express";
import { body, validationResult } from "express-validator";

const router = Router();

/**
 * Product
 */
router.get("/product", (req, res) => {
  res.status(200);
  res.json({ message: req.secret });
});
router.get("/product/:id", (req, res) => {});
router.put("/product/:id", body("name").isString(), (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
});
router.post("/product", (req, res) => {});
router.delete("/product/:id", (req, res) => {});

/**
 * Update
 */
router.get("/update", (req, res) => {});
router.get("/update/:id", (req, res) => {});
router.put("/update/:id", (req, res) => {});
router.post("/update", (req, res) => {});
router.delete("/update/:id", (req, res) => {});

/**
 * Update Points
 */
router.get("/updatepoints", (req, res) => {});
router.get("/updatepoints/:id", (req, res) => {});
router.put("/updatepoints/:id", (req, res) => {});
router.post("/updatepoints", (req, res) => {});
router.delete("/updatepoints/:id", (req, res) => {});

export default router;
