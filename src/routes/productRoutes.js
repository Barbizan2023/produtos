import {Router} from 'express';
import {getProducts, createProductController, getProduct} from '../controllers/productController.js';


const router = Router();

router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", createProductController);

export default router;