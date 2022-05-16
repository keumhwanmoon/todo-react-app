import { API_HOST } from './config';

export function call(apiUrl, method, data) {
    let options = {
        headers: new Headers({
            "Accect": "application/json;utf-8",
            "Content-Type": "application/json;utf-8"
        }),
        url: API_HOST + apiUrl,
        method: method
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    return fetch(options.url, options).then((response) => 
        response.json().then((json) => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
}