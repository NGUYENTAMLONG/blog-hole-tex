import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routers/post.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;

const URI =
  "mongodb+srv://admin:zNSW3N5UvqhZQF7d@cluster0.q79ov.mongodb.net/?retryWrites=true&w=majority";
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/posts", router);
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Mongodb");
    app.listen(PORT, () => {
      console.log(`Server is running on PORT: ` + PORT);
    });
  })
  .catch((err) => console.log(err));
