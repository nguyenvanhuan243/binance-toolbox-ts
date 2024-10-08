require('dotenv').config(); // Load .env variables

import { Spot } from "@binance/connector-typescript";

const apiKey = process.env.API_KEY || '';
const apiSecret = process.env.API_SECRET || '';
console.log("apikey ##########", apiKey)

const client = new Spot(apiKey, apiSecret);

client.accountInformation()
    .then(response => console.log(response))
    .catch(error => console.log(error))
