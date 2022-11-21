require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("63417b48aa5f90401c15e7ab", { age: 22 })
//     .then((user) => {
//         console.log("User: ", user);
//         return User.countDocuments({ age: 22 });
//     })
//     .then((result) => {
//         console.log("Count: ", result);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;
};

updateAgeAndCount("63417b48aa5f90401c15e7ab", 10)
    .then((count) => {
        console.log(count);
    })
    .catch((e) => {
        console.log(e);
    });
