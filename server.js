const express = require('express');
const res = require('express/lib/response');
const app = express()

app.use(express.json());

// const mysql = require('mysql');
// const con = mysql.createConnection({
//       host:'37.59.55.185',
//       user:'m6fSwgfB5H',
//       password:'ang5dMJPuu',
//       port: 3306,
//       database:'m6fSwgfB5H'
// });


// con.connect((err)=>{
//   if(err) throw err;
//   con.query("SELECT * FROM Account",(err, rows, cols)=>{
//     if(err) throw err
//     const objs=[];
//     for(const i=0; i<rows.length; i++)
//     {
//       objs.push({ID_Login: rows[i].ID_Login});
//       objs.push({Password: rows[i].Password});
//     }
//     con.end();
//     res.end(JSON.stringify(obs));
//   });
// });


//Router
app.get('/', (req, res) => {
  res.send('Hello World!')
  });

app.get('/api/courses', (req, res) => {
    res.send(courses)
  });
  
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(courses => courses.id === parseInt(req.params.id))
    if(!course) res.status(404).send('ID not exist')
    res.send(course);
  });

app.post('/api/courses/add', (req, res) => {
    const course = {
        id : req.body.id,
        name : req.body.id,
    }
    courses.push(course)
    res.send(JSON.stringify({
        success : true,
        notice : "Add success",
        data : courses
    }));
  });

app.put('/api/courses/edit/:id', (req, res) => {
    const course = courses.find(courses => courses.id === parseInt(req.params.id))
    course.name = req.body.name;
    res.send(JSON.stringify({
        success : true,
        notice : "Edit success",
        data : courses
    }));
  });

app.delete('/api/courses/delete/:id', (req, res) => {
    const course = courses.find(courses => courses.id === parseInt(req.params.id))
    let index = courses.indexOf(course);
    courses.splice(index, 1)
    res.send(JSON.stringify({
        success : true,
        notice : "Delete success",
        data : courses
    }));
  });


  
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})