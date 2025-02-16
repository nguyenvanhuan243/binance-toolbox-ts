"use strict";
const { Spot } = require("@binance/connector-typescript")
module.exports = {
	getHealthServer: async (req, res) => { res.json({ server: "OK" }) },
	accountOverview: async (req, res) => {
		try {
			const apiKey = process.env.API_KEY || '';
			const apiSecret = process.env.API_SECRET || '';
			console.log("apikey ##########", apiKey)

			const client = new Spot(apiKey, apiSecret);

			client.accountInformation()
				.then(response => {
					console.log(response)
					res.json({ data: response });
				})
				.catch(error => console.log(error))
		} catch (error) {
			console.log(error);
		}
	},
}