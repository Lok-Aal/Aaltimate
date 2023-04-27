import express from "express";
import http from "http";
import cors from "cors";
import { PhoneNumber } from "../utils/types";
import { parsePhoneNumber } from "../utils/number-parser";
import WrongCountryError from "../errors/wrong-country-error";
import WrongFormatError from "../errors/wrong-format-error";

export class ApiService {
    private origin: string;
    private port: number;

    constructor(origin: string, port: number) {
        this.origin = origin;
        this.port = port;
    }

    public init() {
        const app = express();
        // Cors for all
        app.use(cors());
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
                console.log("Number: " + number);
                try{
                    let phoneNumber: PhoneNumber | null = parsePhoneNumber(number); 

                    if (phoneNumber !== null) {
                        res.status(200).json( phoneNumber);
                    } else {
                        res.status(400).json({ error: "invalid phone number" });
                    }
                }catch(e){
                    if(e instanceof WrongCountryError){
                        res.status(400).json({ error: "Dieses Land wird nicht unterstützt" });
                    }else if(e instanceof WrongFormatError){
                        res.status(400).json({ error: "Ungültiges Format" });
                    }else{
                        res.status(500).json({ error: "Internal Server Error" });
                    }
                }
            } else {
                res.status(400).json({ error: "invalid input" });
            }
        });
    }
}