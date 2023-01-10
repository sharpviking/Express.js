// const express = require("express");
// const Joi = require("joi");
// const { result } = require("underscore");
// const { join } = require("path");
//const app = express();
//app.use(express.json());
const mongodb = require("mongoose");
const { string, date, boolean } = require("joi");
const { default: mongoose } = require("mongoose");
const { application } = require("express");

mongodb.connect("mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/test"
    , function (err) {
        if (err) {
            console.log("not able to coneect to mongo db");

        } else {
            console.log("connection successful");
        }
    });





const courseschema = new mongodb.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    ispublished: Boolean,
});

//Creating the model
const Course = mongodb.model("course", courseschema);
//Finding the course

//const Course = mongodb.model("course", courseschema);
const newcourse = new Course({
    name: "CSS",
    author: "Abhishek",
    tags: ["Frontend"],
    ispublished: false,
});
newcourse.save();

const course = new Course({
    name: "HTML",
    author: "Anand",
    tags: ["Deployment", "puthon"],
    ispublished: true,
});
course.save();

//Finding a course
Course.find(
    { author: "Sanjoy", name: "HTML" },
    { _id: 0, __v: 0 },
    { sort: { date: 1 }, limit: 2 },
    function (result, error) {
        if (error) {
            console.log(error);
        } else {
            console.log(result);
        }
    }
);

application.get("/courses", function (req, res) {
    course.find(
        { author: "Abhishek", name: "node.js" },
        { _id: 0, __v: 0 },
        { sort: { date: 1 }, limit: 2 },
        function (error, result) {
            if (error) {
                console.log(error);
            } else {
                res.send(result)
            }
        }
    )
});

app.post("/courses", function (req, res) {
    const validateResult = validateCourses(req.body);
    console.log(validateResult);

    if (validateResult.error) res.send(validateResult.error);
    else {
        var product = {
            id: courses.length + 1,
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
        };
        products.push(courses);
        res.send(courses);
    }
});