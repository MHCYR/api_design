import express from "express";
import router from "./router";
import morgan from "morgan";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // creates an object from the request url

app.use((req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  console.log("hello");
  res.status(200);
  res.json({ message: "hello" });
});

app.use("/api", protect, router);

app.post("/user", createNewUser);
app.post("/signin", signin);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: "Ooops" });
});
export default app;
