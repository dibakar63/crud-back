const authcontroller=require('./controller');
const router=require('express').Router();

router.post('/add',authcontroller.userController);
router.get('/get',authcontroller.getAllData);
router.get('/get/:id',authcontroller.getById);
router.put('/update/:id',authcontroller.updateUsers);
router.delete('/delete/:id',authcontroller.deleteUsers);


module.exports=router