var express = require('express')
var router = express.Router();
var library_controller = require('../controller/librarydata')

router.get('/',library_controller.library_info_all)
router.get('/test',library_controller.test)
router.get('/:id',library_controller.library_info_by_id);

router.post('/create',library_controller.library_create);

router.put('/update/:id',library_controller.library_info_update_by_id);

module.exports = router;