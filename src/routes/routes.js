import { addnewProduct } from '../controllers/controllers';

const routes = app => {
  app.route('/products').post(addnewProduct); //post endpoints
};

export default routes;
