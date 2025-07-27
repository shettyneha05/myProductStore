import express from 'express'
import { getProducts,createProduct, deleteProduct ,updateProduct} from '../controllers/productController.js';

const router=express.Router();

//tested the requests in postman
router.post("/", createProduct);  

router.delete('/:id', deleteProduct);

router.get('/',getProducts);

router.put('/:id', updateProduct);

export default router;