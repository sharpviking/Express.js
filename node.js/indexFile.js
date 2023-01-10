const express = require("express");
const Joi = require("joi");

const { join } = require("path");
const app = express();
app.use(express.json());

const courses = [
  {
    id: 1,
    name: "javascript",
  },
  {
    id: 2,
    name: "react",
  },
  {
    id: 3,
    name: "FSD",
  },
];

const updatestring = "devops";
console.log(courses);
console.log(courses[1].name);
courses[1].name = updatestring;
//put function
//to identify the index for the id
//Update the object

app.get("/", function (req, res) {
  console.log("hi");
  res.send("Hello World1");
  //File read
});
app.get("/products", function (req, res) {
  res.send(courses);
});
app.get("/products/:id", function (req, res) {
  var courseId = req.params.id;
  //array.find
  //array.push
  var course = courses.find((c) => c.id === parseInt(courseId));
  if (!course) {
    res.status(404).send("Course not found");
  } else res.send(course);
});

//post servidce
//localhost:3000/course
//body
//{"name":"Devops"}
app.post("/products", function (req, res) {
  //course object
  //validation of the input
  //creating schema
  //  const schema = Joi.object({
  //    name: Joi.string().min(3).required(),
  //  });
  const validateResult = validateCourse(req.body);
  console.log(validateResult);

  if (validateResult.error) res.send(validateResult.error);
  else {
    var course = {
      id: courses.length + 1,
      name: req.body.name,
    };
    //push that object into the courses array
    courses.push(course);
    res.send(course);
  }
});
//Running the Put Function
app.put("/products/:id", function (req, res) {
  const validateResult = validateCourse(req.body);
  console.log(validateResult);

  if (validateResult.error) res.send(validateResult.error);
  else {
    var courseId = req.params.id;
    var course = courses.find((c) => c.id === parseInt(courseId));
    let courseindex = courses.findIndex((c) => c.id === parseInt(courseId));
    courses[courseindex].name = req.body.name;
    res.send(courses[courseindex]);

    //update the course in that index
    //how do we update a particular object in an array
    //
  }
});


app.delete('/products/:id', (req, res) => {
  console.log("DELETE Request Called for /courses/:id")
  res.send("DELETE Request Called")
})

app.listen(5000);
console.log("listening the server on port 5000");
//JOI module and validate the input for post request
function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  try {
    const result = schema.validate(course);
    return result;
  } catch (err) {
    return err;
  }
}

{
  email: "Sanjoy.paul@herovired.com";
  name: "sanjoy";
  age: 35;
  phoneNumber: 123456789;
  street: "kolkata";
  hobby: "football";
}

//email should have email
//name should not be null
//phonenumber need to be of 10 digit
//street can not be null
//hobby can be null

//Create a schema in Joi
//validate the schema against the input
//no error
//catch : error

//JS Advance : Fetch , AJAX , Objects, Async Programming, Promises, Object Oriented Programming with JS, DSA
//Creating a Dynamic Website: Bootstrap,Media Query, Animations, DOM, Material UI Basics, Public APIs using Fetch and AJAX
//Creating Backend: Node, Express, Mongo,SQLqueries Building backend APIs and depolying it in Cloud
//React: States, Life Cycle Hooks, Redux: Special Class ,Material UI Basics
