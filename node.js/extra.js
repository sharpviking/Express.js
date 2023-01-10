app.put("/courses/:id", function (req, res) {
    const validateResult = validateCourse(req.body);
    console.log(validateResult);

    if (validateResult.error) res.send(validateResult.error);
    else {
        var courseId = req.params.id;
        var course = courses.find((c) => c.id === parseInt(courseId));
        let courseindex = courses.findIndex((c) => c.id === parseInt(courseId));
        courses[courseindex].name = req.body.name;
        res.send(courses[courseindex]);


    }
});

app.delete('/courses/:id', (req, res) => {

    var courseId = req.params.id;
    var course = courses.find((c) => c.id === parseInt(courseId));
    let deleteCourses = courses.splice(courseindex, 1);
    res.send(deletedcourse);

})



app.delete('/api', (req, res) => {
    console.log("DELETE Request Called for /api endpoint")
    res.send("DELETE Request Called")
})

