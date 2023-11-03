// script.js

document.getElementById('postRequestBtn').addEventListener('click', makePostRequest);
document.getElementById('getRequestBtn').addEventListener('click', makeGetRequest);

function makePostRequest() {
    const postUrl = '/api/login';

    console.log('Making POST request...');

    fetch(postUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log('POST request response status:', response.status);
        return response.text(); // Use text() if the response is not JSON
    })
    .then(responseText => {
        console.log('POST request response text:', responseText);
        document.getElementById('postResponseContainer').innerText = 'POST Response: ' + responseText;
    })
    .catch(error => {
        console.error('POST request error:', error);
        document.getElementById('postResponseContainer').innerText = 'POST request error: ' + error.message;
    });
}

function makeGetRequest() {
    const getUrl = '/api/devices';

    console.log('Making GET request...');

    fetch(getUrl, {
        method: 'GET'
    })
    .then(response => {
        console.log('GET request response status:', response.status);
        return response.text(); // Use text() if the response is not JSON
    })
    .then(responseText => {
        console.log('GET request response text:', responseText);
        document.getElementById('getResponseContainer').innerText = 'GET Response: ' + responseText;
    })
    .catch(error => {
        console.error('GET request error:', error);
        document.getElementById('getResponseContainer').innerText = 'GET request error: ' + error.message;
    });
}
