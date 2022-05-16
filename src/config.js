let api_host;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
    api_host = "http://localhost:8080";
}

export const API_HOST = `${api_host}`;