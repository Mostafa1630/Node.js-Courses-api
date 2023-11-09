const express = require('express');
const router = express.Router();
const coursesController = require('../controller/courses.controller');
const { validation } = require('../middleware/validationSchema');

router.route('/')
.get(coursesController.getAllCourse )
.post(
validation()
, coursesController.addCourse )


router.route('/:courseid')
.get(coursesController.getCourse)
.patch(coursesController.updateCourse)
.delete(coursesController.deleteCourse);


module.exports = router;