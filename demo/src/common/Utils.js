const API_ENDPOINT = "https://api.iawaketechnologies.com/api/v2/media-library";

export const createUrl = (action) => {
    let url;
    url = API_ENDPOINT + '/' + action;
    return url;
}

export const ajaxCall = async (
    url,
    params={},
    method = 'GET',
    requestTimeout = 30000,
    ) => {

    const response = await fetch(url, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(params),
            timeoutInterval: requestTimeout,
        },
        (err, res) => {
            console.log("error occured :" + err)
        },
    );
    return response.json();
}