const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => { console.log("DATABASE connected successfully"); })
    .catch((e) => {
        console.log("db connection failed ");
        console.log(e);
        process.exit(1);
    });
}
