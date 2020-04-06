const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
let faxina = require("./faxina")
const Promise = require('promise')

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
	if (err) return console.log('Error loading client secret file:', err);
	// Authorize a client with credentials, then call the Google Sheets API.
	authorize(JSON.parse(content), getValues);
});

function authorize(credentials, callback) {
	const { client_secret, client_id, redirect_uris } = credentials.installed;
	const oAuth2Client = new google.auth.OAuth2(
		client_id, client_secret, redirect_uris[0]);

	// Check if we have previously stored a token.
	fs.readFile(TOKEN_PATH, (err, token) => {
		if (err) return getNewToken(oAuth2Client, callback);
		oAuth2Client.setCredentials(JSON.parse(token));
		callback(oAuth2Client);
	});
}

function getNewToken(oAuth2Client, callback) {
	const authUrl = oAuth2Client.generateAuthUrl({
		access_type: 'offline',
		scope: SCOPES,
	});
	console.log('Authorize this app by visiting this url:', authUrl);
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	rl.question('Enter the code from that page here: ', (code) => {
		rl.close();
		oAuth2Client.getToken(code, (err, token) => {
			if (err) return console.error('Error while trying to retrieve access token', err);
			oAuth2Client.setCredentials(token);
			// Store the token to disk for later program executions
			fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
				if (err) return console.error(err);
				console.log('Token stored to', TOKEN_PATH);
			});
			callback(oAuth2Client);
		});
	});
}

function getValues(auth) {
	const sheets = google.sheets('v4');

	const diasFaxinaRange = "FaxinaAutomatica!B2:B4";
	const primeiraFaxinaRange = 'FaxinaAutomatica!A2';
	const pessoasRange = "FaxinaAutomatica!C2:C13"
	const tarefasRange = 'FaxinaAutomatica!A6:B13';

	var getRequest = {
		spreadsheetId: '1yFUnIx4UI75-04dSQXf1EsRydfwlN1xidzco0VYOMMg',
		ranges: [diasFaxinaRange, primeiraFaxinaRange, pessoasRange, tarefasRange],
		valueRenderOption: 'FORMATTED_VALUE',
		dateTimeRenderOption: 'FORMATTED_STRING',
		auth: auth,
	};

	var aux = [];
	sheets.spreadsheets.values.batchGet(getRequest, (err, res) => {
		if (err) return console.log('The API returned an error: ' + err)
		else {
			for (var i = 0; i < res.data.valueRanges.length; i++) {
				aux.push(res.data.valueRanges[i].values);
			}
			// var x = faxina.faxine(aux)
			console.log(aux)
			/* 	
			var postRequest = {
							spreadsheetId: '1yFUnIx4UI75-04dSQXf1EsRydfwlN1xidzco0VYOMMg',
							ranges: "FaxinaAutomatica!B15",
							resource: {
								values: []
							}
						};
			
						postRequest.resource.values = x;
						sheets.spreadsheet.values.append(postRequest, (err, res) => {
							if (err) return console.log('The API returned an error: ' + err);
			
							console.log("Done")
						}) */
		}
	})
}
