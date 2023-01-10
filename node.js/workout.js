const express = require("express");
const Joi = require("joi");

const { join } = require("path");
const app = express();
app.use(express.json());

var products = [{
    id: 1,
    name: "Thumsup",
    price: 20,
    category: "Grocery"
},
{
    id: 2,
    name: "fanta",
    price: 25,
    category: "Grocery"
},
{
    id: 3,
    name: "rice",
    price: 30,
    category: "grains"
}]

app.get("/", function (req, res) {
    console.log("hi");
    res.send("Hello World1");

});
app.get("/products", function (req, res) {
    res.send(courses);
});
app.get("/products/:id", function (req, res) {
    var courseId = req.params.id;


    var course = products.find((c) => c.id === parseInt(courseId));
    if (!course) {
        res.status(404).send("products not found");
    } else res.send(course);
});


app.post("/products", function (req, res) {

    const validateResult = validateProducts(req.body);
    console.log(validateResult);

    if (validateResult.error) res.send(validateResult.error);
    else {
        var products = {
            id: products.length + 1,
            name: req.body.name,
        };

        products.push(products);
        res.send(products);
    }
});




app.put("/products/:id", function (req, res) {
    const validateResult = validateProducts(req.body);
    console.log(validateResult);

    if (validateResult.error) res.send(validateResult.error);
    else {
        var productsId = req.params.id;
        var products = courses.find((c) => c.id === parseInt(courseId));
        let productsindex = products.findIndex((c) => c.id === parseInt(courseId));
        products[productsindex].name = req.body.name;
        res.send(products[productsindex]);


    }
});

app.listen(5000);
console.log("listening the server on port 5000");

function validateProducts(products) {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

}