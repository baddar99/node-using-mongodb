import {
  addnewProduct,
  getProducts,
  getProductWithID,
  updateProduct,
  deleteProduct,
} from '../controllers/controllers';

const routes = app => {
  app
    .route('/products')

    .get(getProducts)

    .post(addnewProduct); //post endpoints

  app
    .route('/products/:ProductID')
    .get(getProductWithID)

    .put(updateProduct)

    .delete(deleteProduct); //post endpoints

  app.route('/products/:ProductID').delete(deleteProduct);
};

export default routes;
