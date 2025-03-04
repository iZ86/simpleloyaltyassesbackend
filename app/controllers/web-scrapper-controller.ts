import { Request, Response } from "express";
import webScrapperService from "../services/web-scrapper-service";

export default class WebScrapperController {
    async getWebScrapper(req: Request, res: Response) {
        try {
            const result = await webScrapperService.getWebScrapper();
            res.send(result);
        } catch (error) {
            console.log(error);
            res.status(500).send("DEATH");
        }
    }
}
