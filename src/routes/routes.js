import {
  addnewProduct,
  getProducts,
  getProductWithID,
  deleteProduct,
} from '../controllers/controllers';

const routes = app => {
  app.route('/products').get(getProducts).post(addnewProduct); //post endpoints

  app.route('/products/:ProductID').get(getProductWithID); //post endpoints

  app.route('/products/:ProductID').delete(deleteProduct);
};

export default routes;
