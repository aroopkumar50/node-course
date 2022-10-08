const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useNewUrlParser: true,
    useCreateIndex: true,
});

// const User = mongoose.model("User", {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error("Email is invalid!");
//             }
//         },
//     },
//     password: {
//         type: String,
//         required: true,
//         minLength: 7,
//         trim: true,
//         validate(value) {
//             if (value.toLowerCase().includes("password")) {
//                 throw new Error("Invalid Password!!!");
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error("Age must be positive!");
//             }
//         },
//     },
// });

// const me = new User({
//     name: "   AK ",
//     email: "abSD@hj.com  ",
//     password: "  fg455123"

// });

// me.save()
//     .then(() => {
//         console.log(me);
//     })
//     .catch((error) => {
//         console.log("Error! ", error);
//     });

const Task = mongoose.model("Task", {
    description: {
        type: String,
        require: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

const task1 = new Task({
    description: "   Second Task",
});

task1
    .save()
    .then((t) => {
        console.log(t);
    })
    .catch((error) => {
        console.log(error);
    });
