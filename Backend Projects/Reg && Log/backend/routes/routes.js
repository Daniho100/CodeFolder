const express = require('express')
const router = express.Router();
const {login, verifyToken} = require('../controllers/authController')
const { registerUser } = require('../controllers/userController');

// router.get('/', getUser)
router.post('/login', login);
router.post('/register', registerUser);


module.exports = router;







// router.post('/admin/users', verifyToken, createAdminUser);
// router.get('/dashboard', verifyToken, dashboard)
// router.get('/dashboard/admin', verifyToken, adminDashboard)
// router.get('/dashboard/user', verifyToken, userDashboard)
// router.post('/users', verifyToken, createUser)
// router.put('/users/:id', verifyToken, updateUser)
// router.delete('/users/:id', verifyToken, deleteUser)
