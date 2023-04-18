import express from "express";
import http from "http";
import { PhoneNumber } from "../utils/types";
import { parsePhoneNumber } from "../utils/number-parser";

export class ApiService {
    private origin: string;
    private port: number;

    constructor(origin: string, port: number) {
        this.origin = origin;
        this.port = port;
    }

    public init() {
        const app = express();
        var httpWebServer;
        httpWebServer = http.createServer(app);

        httpWebServer.listen(this.port, () => {
            console.log(`API listening to port ${this.port}`);
            this.registerRoutes(app);
        });
    }

    private registerRoutes(app: express.Application) {
        app.get('/parseNumber', async (req, res) => {
            let number = req.query.number;
            if (number !== undefined && typeof(number) === "string") {
                let phoneNumber: PhoneNumber | null = parsePhoneNumber(number); 
                if (phoneNumber !== null) {
                    res.status(200).json({ phoneNumber: phoneNumber });
                } else {
                    res.status(400).json({ error: "invalid phone number" });
                }
            } else {
                res.status(400).json({ error: "invalid input" });
            }
        });
    }
}