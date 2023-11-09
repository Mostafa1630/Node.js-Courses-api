let courses = require("../data/courses");
const { validationResult} = require('express-validator');


// Get All Courses
const getAllCourse = (req, res) => {
  res.json(courses);
};

// Get A Single Course
const getCourse = (req, res) => {
  // console.log(req.params.courseid);
  const corsedId = req.params.courseid;
  const course = courses.find((course) => course.id === parseInt(corsedId));
  if (!course) {
    return res.status(404).json({ msg: "Corse Not Found" });
  }
  res.json(course);
};

// Create Course
const addCourse = (req, res) => {
  // console.log(req.body);
  // if(!req.body.title){
  //   return res.status(400).json({msg:'title not found'});
  // }
  // if(!req.body.price){
  //   return res.status(400).json({msg:'price not found'});
  // }

  const errors = validationResult(req);
  // console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  const course = { id: courses.length + 1, ...req.body };
  courses.push(course);
  res.status(201).json(course);
};

// Update Course
const updateCourse = (req, res) => {
  const courseId = parseInt(req.params.coursId);
  let course = courses.find((el) => el.id === courseId);

  if (!course) {
    return res.status(404).json({ msg: "Course Not Found" });
  }

  course = { ...course, ...req.body };

  res.status(200).json(course);
};

// Delete Course
const deleteCourse = (req, res) => {
  const courseId = parseInt(req.params.coursId);

  courses = courses.filter((el) => el.id !== courseId);
  res.status(200).json(courses);
};


module.exports = {
  getAllCourse,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse
}