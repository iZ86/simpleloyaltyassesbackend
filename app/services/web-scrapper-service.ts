import * as cheerio from "cheerio";
import axios from "axios";


class WebScrapperService {

    async getWebScrapper() {
        const response = await fetch("https://mashable.com/");
        const data = await response.text();

        let titles = "";

        // parsing the HTML source of the target web with Cheerio
        const $ = cheerio.load(data);
        const elements = $("a").toArray();

        for (const element of elements) {
            const aTag = $(element);
            let title = undefined;
            if (aTag.find("span.text-2xl").length > 0) {
                title = aTag.find("span.text-2xl").text().trim();
            } else {
                title = aTag.text().trim();
            }

            let linkURI = aTag.attr("href");

            if (title && linkURI) {
                if (linkURI.substring(0, 8) == "/article") {
                    let link = "https://mashable.com" + $(element).attr("href");  
                    titles += "<a href='" + link + "'>" + title + "</a><br>";
                }
                
            }
            
        }
       return titles;
    }
}

export default new WebScrapperService();