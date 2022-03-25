const express = require('express');
const res = require('express/lib/response');
const app = express();
const bodyParser = require('body-parser');
const _AuthMiddleWare = require('./app/common/_AuthMiddleWare');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());

//Router
// app.get('/', (req, res) => {
//   res.send('Hello World!')
//   });

// app.get('/api/courses', (req, res) => {
//     res.send(courses)
//   });
  
// app.get('/api/courses/:id', (req, res) => {
//     const course = courses.find(courses => courses.id === parseInt(req.params.id))
//     if(!course) res.status(404).send('ID not exist')
//     res.send(course);
//   });

// app.post('/api/courses/add', (req, res) => {
//     const course = {
//         id : req.body.id,
//         name : req.body.id,
//     }
//     courses.push(course)
//     res.send(JSON.stringify({
//         success : true,
//         notice : "Add success",
//         data : courses
//     }));
//   });

// app.put('/api/courses/edit/:id', (req, res) => {
//     const course = courses.find(courses => courses.id === parseInt(req.params.id))
//     course.name = req.body.name;
//     res.send(JSON.stringify({
//         success : true,
//         notice : "Edit success",
//         data : courses
//     }));
//   });

// app.delete('/api/courses/delete/:id', (req, res) => {
//     const course = courses.find(courses => courses.id === parseInt(req.params.id))
//     let index = courses.indexOf(course);
//     courses.splice(index, 1)
//     res.send(JSON.stringify({
//         success : true,
//         notice : "Delete success",
//         data : courses
//     }));
//   });

require('./app/routes/home.router')(app);
require('./app/routes/login.router')(app);
app.use(_AuthMiddleWare.isAuth); //Các router phía dưới sẽ bị check token
require('./app/routes/profile.router')(app);
require('./app/routes/account.router')(app);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})