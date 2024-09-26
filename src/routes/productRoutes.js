import {Router} from 'express';
import {getProducts, createProductController, getProduct, updateProductController, deleteProductController} from '../controllers/productController.js';
import { deleteProduct } from '../services/productService.js';


const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", createProductController);
router.patch("/products/:id", updateProductController);
router.delete("/products/:id", deleteProductController);

export default router;