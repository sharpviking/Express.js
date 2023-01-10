const Course = mongodb.model("course", courseSchema);
Course.find({ author: Abhishek } function (resilt, err))
Course.find(function (result, err) {
    if (err) {
        console.log("No data is found")
    } else {
        console.log(result);
    }

})

const newcourse = new Course({}
    name = "css",
    author: 'Abhishek',
    tags: ["Frontend"],
    isPublished: false,

    Course.find(
        { author: "Sanjoy" },
        { _id: 0, __v: 0 },
        { sort: { date: 1 } },
        function (result, error) {
            if (error) {
                console.log(error);
            } else {
                console.log(result);
            }
        }
    );


const courseSchema = new mongodb.Schema({
    name: String,
    author: String,
    tags: [String],
    isPublished: boolean,
    Date: { Date, default: Date.now }
});
