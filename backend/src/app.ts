import { ApiService } from "./service/api";
import fs from "fs";
import { deutscheVorwahlen } from "./utils/dicts";

const api = new ApiService("127.0.0.1", 8080);
api.init();

let dwMap : {[key:number]: string} = {};

