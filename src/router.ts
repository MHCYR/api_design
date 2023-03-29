import { Router } from "express";
import { body, validationResult } from "express-validator";
import { handleIputErrors } from "./modules/middleware";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from "./handlers/product";

const router = Router();

/**
 * Product
 */
router.get("/product", getProducts);
router.get("/product/:id", getOneProduct);
router.put(
  "/product/:id",
  body("name").isString(),
  handleIputErrors,
  updateProduct
);
router.post(
  "/product",
  body("name").isString(),
  handleIputErrors,
  createProduct
);
router.delete("/product/:id", deleteProduct);

/**
 * Update
 */
router.get("/update", (req, res) => {});
router.get("/update/:id", (req, res) => {});
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  body("version").optional(),
  (req, res) => {}
);
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("product").exists().isString(),
  (req, res) => {}
);
router.delete("/update/:id", (req, res) => {});

/**
 * Update Points
 */
router.get("/updatepoints", (req, res) => {});
router.get("/updatepoints/:id", (req, res) => {});
router.put(
  "/updatepoints/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  (req, res) => {}
);
router.post(
  "/updatepoints",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
  (req, res) => {}
);
router.delete("/updatepoints/:id", (req, res) => {});

export default router;
