const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const https = require('https');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post('/api/login', async (req, res) => {
    const postUrl = 'https://64.18.240.99:9082/api/v1/login';
    const postData = {
        username: 'chriscsumb',
        password: 'Enterprise767!',
        eulaAccepted: true,
        verifyCsrfToken: true
    };

    try {
        const apiResponse = await fetch(postUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData),
            agent: new https.Agent({
                rejectUnauthorized: false
            })
        });

        const responseText = await apiResponse.text();
        res.send(responseText);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/api/devices', async (req, res) => {
    const getUrl = 'https://64.18.240.99:9082/api/v1/devices/mac/B4:FB:E4:A8:06:29';

    try {
        const apiResponse = await fetch(getUrl, {
            method: 'GET',
            agent: new https.Agent({
                rejectUnauthorized: false
            })
        });

        const responseText = await apiResponse.text();
        res.send(responseText);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
