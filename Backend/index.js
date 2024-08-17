import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors());
app.use(express.json())
dotenv.config();
const port = process.env.PORT || 4000;

//connect to mongodb
const MongoDBURI = process.env.MONGODBURI;
try {
  mongoose.connect(MongoDBURI, {
    useNewUrlParser: true, //this two because we are using mongodb compass if we were using atlas these is not needed
    useUnifiedTopology: true,
  });
  console.log("Connected to mongodb");
} catch (error) {
  console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);

app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
