const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const coursesRouter = require('./routes/courses.route')
;
app.use(bodyParser.json());
// app.use(express.json());

app.use('/api/courses' , coursesRouter);







app.listen('4000' , () => {
  console.log('Project Listen In Port :: 4000');
})