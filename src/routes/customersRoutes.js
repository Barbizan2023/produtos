import {Router} from 'express';
import { createCustomersController,  updateCustomersController, deleteCustomersController, getCustomer, getCustomersController} from '../controllers/customersController.js';

const router = Router();

router.get("/customers", getCustomersController);
router.get("/customers/:id", getCustomer);
router.post("/customers", createCustomersController);
router.patch("/customers/:id", updateCustomersController);
router.delete("/customers/:id", deleteCustomersController);

export default router;





