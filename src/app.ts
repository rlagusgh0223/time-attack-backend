import bodyParser from "body-parser";
import express from "express";
import controllers from "./contexts/index.context";
import authMiddleware from "./middlewares/auth.middlewares";

const app = express();
const port = 5050;
const jsonParser = bodyParser.json();

app.use(authMiddleware);
app.use(jsonParser);
app.use(controllers);

app.listen(port, () => {
  console.log(`포트번호 ${port}`);
});
