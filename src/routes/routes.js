import {
  addnewProduct,
  getProducts,
  getProductWithID,
} from '../controllers/controllers';

const routes = app => {
  app.route('/products').get(getProducts).post(addnewProduct); //post endpoints

  app.route('/products/:ProductID').get(getProductWithID); //post endpoints
};

export default routes;
