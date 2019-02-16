let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET products page. */
router.get('/products', indexController.displayProductsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

/*GET - Display Login page.*/
router.get('/login',indexController.displayLoginPage);

/* POST - Process login page*/
router.get('/login',indexController.processLoginPage);

/* GET - displays the registration page*/
router.get('/login',indexController.displayRegistrationPage);

/* POST - process the registration page*/
router.get('/login',indexController.processRegistrationPage);

/* GET - perform the logout request*/
router.get('/login',indexController.performLogout);

module.exports = router;
