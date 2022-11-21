require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("6378cb1252728d05502088cc")
//     .then((task) => {
//         console.log(task);
//         return Task.countDocuments({ completed: false });
//     })
//     .then((result) => {
//         console.log("Count: ", result);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
};

deleteTaskAndCount("6378cb1252728d05502088cc")
    .then((count) => {
        console.log(count);
    })
    .catch((e) => {
        console.log(e);
    });
