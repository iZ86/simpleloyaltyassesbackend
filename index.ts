import express, { Application, Router } from "express";
import WebScrapperController from "./app/controllers/web-scrapper-controller";
const app: Application = express();
var router: Router = express.Router();
const port: number = 3000;
const webScrapperController = new WebScrapperController();

app.use(router);

router.get("/", (req, res) => {
    webScrapperController.getWebScrapper(req, res);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})