
function start() {
    // Initializes the client with the API key and the Translate API.
    // @ts-ignore

    gapi.client.init({
        'apiKey': 'AIzaSyD28ivweYxbRfMY4nQNYGGiXE_8WOU_crg',
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
    }).then(function() {
        // Executes an API request, and returns a Promise.
        // The method name `language.translations.list` comes from the API discovery.
        // @ts-ignore

        return gapi.client.youtube.channels.list({
            "part": [
                "snippet,contentDetails,statistics"
            ],
            "id": [
                "UC_x5XG1OV2P6uZZ5FSM9Ttw "
            ]
        });
    }).then(function(response) {
        console.log("Response", response);
        //console.log(toCSV(response));

    }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
    });
}
// @ts-ignore
gapi.load('client', start);