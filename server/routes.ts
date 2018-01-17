import * as express from 'express';

import ContactCtrl from './controllers/contact';
import UserCtrl from './controllers/user';

export default function setRoutes(app) {

  const router = express.Router();

  const contactCtrl = new ContactCtrl();
  const userCtrl = new UserCtrl();

  // Contacts
  router.route('/contacts').get(contactCtrl.getAll);
  router.route('/contacts/count').get(contactCtrl.count);
  router.route('/contact').post(contactCtrl.insert);
  router.route('/contact/:id').get(contactCtrl.get);
  router.route('/contact/:id').put(contactCtrl.update);
  router.route('/contact/:id').delete(contactCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}