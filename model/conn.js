const mongoose = require("mongoose");
const DB =
  "mongodb+srv://Suryansh:thebeast@06@cluster0.wqpq1.mongodb.net/CARS4U?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((err) => console.log(`connection failed`));
